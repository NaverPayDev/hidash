#!/usr/bin/env node
import {readFile} from 'node:fs/promises'

function formatBenchmarkResults(input, commitId) {
    const lines = input.split('\n')
    const results = new Map()
    let currentTest = ''

    let isInSummary = false
    for (const line of lines) {
        if (line.includes('BENCH  Summary')) {
            isInSummary = true
            continue
        }

        if (isInSummary && line.trim()) {
            const testMatch = line.match(/\s+(hidash|lodash).*?src\/([\w/]+)\.bench\.ts\s*>\s*(.*?)\s*performance/)
            if (testMatch) {
                const [_, __, file, testName] = testMatch
                currentTest = {
                    name: testName.trim(),
                    file: `${file}.ts`, // 원본 소스 파일
                }
                continue
            }

            const resultMatch = line.match(/\s+([\d.]+)x faster than (hidash|lodash)/)
            if (resultMatch && currentTest) {
                const [_, ratio, loser] = resultMatch
                results.set(currentTest.name, {
                    test: currentTest.name,
                    file: currentTest.file,
                    winner: loser === 'hidash' ? 'lodash' : 'hidash',
                    ratio,
                    loser,
                })
            }
        }
    }

    const repoUrl = process.env.GITHUB_REPOSITORY
        ? `https://github.com/${process.env.GITHUB_REPOSITORY}`
        : 'https://github.com/NaverPayDev/hidash' // fallback

    return [
        '### Benchmark Results',
        '',
        '| Test | Result |',
        '|------|--------|',
        ...[...results.values()].map(
            (result) =>
                `| [${result.test}](${repoUrl}/blob/${commitId}/src/${result.file}) | ${result.winner} is ${result.ratio}x faster than ${result.loser} |`,
        ),
        '',
        '> Note: Each test compares hidash vs lodash implementation. Click on the test name to view the source code.',
        '',
        '<details>',
        '<summary>View Full Benchmark Output</summary>',
        '',
        '```',
        input,
        '```',
        '</details>',
    ].join('\n')
}

const [, , inputFile, commitId = 'main'] = process.argv

if (!inputFile) {
    // eslint-disable-next-line no-console
    console.error('Usage: benchmark-to-md.mjs <benchmark-output-file> [commit-id]')
    process.exit(1)
}

try {
    const input = await readFile(inputFile, 'utf8')
    // eslint-disable-next-line no-console
    console.log(formatBenchmarkResults(input, commitId))
} catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error.message)
    process.exit(1)
}
