/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

const micromatch = require('micromatch')

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Require the same function to be exported as both default and named export',
            recommended: false,
        },
        schema: [
            {
                type: 'object',
                properties: {
                    include: {
                        type: 'array',
                        items: {type: 'string'},
                        minItems: 1,
                    },
                    exclude: {
                        type: 'array',
                        items: {type: 'string'},
                        minItems: 0,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    create(context) {
        const {include, exclude} = context.options[0] || {}
        const filePath = path.relative(context.getCwd(), context.getFilename())

        const isIncluded = micromatch.isMatch(filePath, include)
        const isExcluded = micromatch.isMatch(filePath, exclude)

        if (!(isIncluded && !isExcluded)) {
            return {}
        }

        let defaultExport = null
        const namedExports = new Set()

        return {
            ExportDefaultDeclaration(node) {
                if (node.declaration.type === 'Identifier') {
                    defaultExport = node.declaration.name
                } else if (node.declaration.type === 'FunctionDeclaration' && node.declaration.id) {
                    defaultExport = node.declaration.id.name
                }
            },

            ExportNamedDeclaration(node) {
                if (node.declaration) {
                    if (node.declaration.type === 'FunctionDeclaration') {
                        namedExports.add(node.declaration.id.name)
                    } else if (node.declaration.type === 'VariableDeclaration') {
                        node.declaration.declarations.forEach((decl) => {
                            if (decl.id.type === 'Identifier') {
                                namedExports.add(decl.id.name)
                            }
                        })
                    }
                }

                if (node.specifiers) {
                    node.specifiers.forEach((specifier) => {
                        if (specifier.exported.type === 'Identifier') {
                            namedExports.add(specifier.exported.name)
                        }
                    })
                }
            },

            'Program:exit'() {
                // named exports가 정확히 하나여야 함
                if (namedExports.size !== 1) {
                    context.report({
                        node: context.getSourceCode().ast,
                        message: 'File must export exactly one function',
                    })
                    return
                }

                // default export가 반드시 있어야 함
                if (!defaultExport) {
                    context.report({
                        node: context.getSourceCode().ast,
                        message: 'Function must be exported as default export',
                    })
                    return
                }

                // named export와 default export가 같은 함수여야 함
                const namedExport = Array.from(namedExports)[0]
                if (defaultExport !== namedExport) {
                    context.report({
                        node: context.getSourceCode().ast,
                        message: `The function must be exported as both default and named export (named: "${namedExport}", default: "${defaultExport}")`,
                    })
                }
            },
        }
    },
}
