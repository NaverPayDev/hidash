#!/usr/bin/env node
import {readFile} from 'node:fs/promises'

function formatBenchmarkResults(input, commitId) {
    const lines = input.split('\n')
    const results = new Map()
    let currentTest = ''
    let isInSummary = false

    // 각 테스트 결과를 직접 파싱
    for (const line of lines) {
        // 테스트 이름 추출
        const testMatch = line.match(/✓\s+src\/([\w/]+)\.bench\.ts\s*>\s*(.*?)\s*performance/)
        if (testMatch) {
            const [_, file, testName] = testMatch
            currentTest = {
                name: testName.trim(),
                file: `${file}.ts`,
            }
            continue
        }

        // 결과 라인 찾기 ('fastest' 태그가 있는 라인)
        if (line.includes('·') && line.includes('fastest')) {
            if (!currentTest) continue

            const parts = line.split(/\s+/).filter(Boolean)
            const winnerHz = parseFloat(parts.find((p) => !isNaN(p)))
            const winner = parts[2] // hidash 또는 lodash

            // 다음 라인에서 비교 대상 찾기
            const nextLineIndex = lines.indexOf(line) + 1
            if (nextLineIndex < lines.length) {
                const nextLine = lines[nextLineIndex]
                if (nextLine.includes('·')) {
                    const nextParts = nextLine.split(/\s+/).filter(Boolean)
                    const loserHz = parseFloat(nextParts.find((p) => !isNaN(p)))
                    const ratio = (winnerHz / loserHz).toFixed(2)

                    results.set(currentTest.name, {
                        test: currentTest.name,
                        file: currentTest.file,
                        winner: winner,
                        ratio: ratio,
                        loser: nextParts[2],
                    })
                }
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
