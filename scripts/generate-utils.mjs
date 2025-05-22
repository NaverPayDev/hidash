import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const scanUtils = () => {
    const srcDir = path.join(__dirname, '../src')
    return fs
        .readdirSync(srcDir)
        .filter((file) => file.endsWith('.ts'))
        .filter((file) => !file.includes('.test.') && !file.includes('.bench.'))
        .map((file) => file.replace('.ts', ''))
        .sort()
}

const generateModuleMap = (utils) => {
    const moduleEntries = utils.map((util) => `    ${util}: './src/${util}.ts'`)

    return `// only for vite, tsup
// remember, this is not barrel file.
const moduleMap = {
${moduleEntries.join(',\n')},
} as const

export default moduleMap
`
}

const generateExports = (utils, {prefix = ''}) => {
    const exportEntries = utils
        .map(
            (util) => `"./${util}": {
           "import": {
               "types": "./${util}.d.mts",
               "default": "./${util}.mjs"
           },
           "require": {
               "types": "./${util}.d.ts",
               "default": "./${util}.js"
           }
       }`,
        )
        .join(',\n')

    return `{${prefix}${exportEntries}}`
}

const main = () => {
    const utils = scanUtils()
    const moduleMapContent = generateModuleMap(utils)
    fs.writeFileSync(path.join(__dirname, '../index.ts'), moduleMapContent)

    const packagePath = path.join(__dirname, '../package.json')
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
    pkg.exports = JSON.parse(
        generateExports(utils, {
            prefix: '"./package.json": "./package.json",\n',
        }),
    )
    fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 4) + '\n')
}

main()
