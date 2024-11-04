import {babel} from '@rollup/plugin-babel'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import preserveDirectives from 'rollup-preserve-directives'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

const SUPPORT_TARGETS = browserslistToEsbuild()

const moduleMap = {
    isEmpty: './src/isEmpty.ts',
    size: './src/size.ts',
    keys: './src/keys.ts',
    isNil: './src/isNil.ts',
    isArray: './src/isArray.ts',
    isObject: './src/isObject.ts',
    has: './src/has.ts',
} as const

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        preserveDirectives(),
        babel({
            babelHelpers: 'runtime',
            plugins: [
                ['@babel/plugin-transform-runtime'],
                [
                    'babel-plugin-polyfill-corejs3',
                    {
                        method: 'usage-pure',
                        version: '3.38.1',
                        proposals: true,
                    },
                ],
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: 'node_modules/**',
        }),
        dts({
            rollupTypes: true,
        }),
    ],
    build: {
        outDir: 'dist',
        lib: {
            entry: moduleMap,
        },
        rollupOptions: {
            // if neccessary
            // external: [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)].flatMap((dep) => [
            //     dep,
            //     new RegExp(`^${dep}/.*`),
            // ]),
            output: [
                {
                    format: 'es',
                    dir: 'dist',
                },
            ],
        },
        target: SUPPORT_TARGETS,
    },
})
