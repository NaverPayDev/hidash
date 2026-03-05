# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: TINY (10) | lodash is 1.00x faster | 7648521.56 | 7648521.56 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: SMALL (100) | lodash is 1.00x faster | 1294083.60 | 1294083.60 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: MEDIUM (1000) | lodash is 1.00x faster | 143113.30 | 143113.30 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: LARGE (10000) | lodash is 1.00x faster | 14489.84 | 14489.84 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: TINY (10) | lodash is 1.00x faster | 1383700.66 | 1383700.66 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: SMALL (100) | lodash is 1.00x faster | 161558.77 | 161558.77 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: MEDIUM (1000) | lodash is 1.00x faster | 16424.63 | 16424.63 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: LARGE (10000) | lodash is 1.00x faster | 1657.58 | 1657.58 🏆 |
| [assign](https://github.com/NaverPayDev/hidash/blob/main/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.52x faster | 27.14 🏆 | 10.75 |
| [before](https://github.com/NaverPayDev/hidash/blob/main/src/before.ts) ⚠️ | src/before.bench.ts > before performance | lodash is 1.63x faster | 342313.87 | 556456.20 🏆 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/main/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.44x faster | 635.37 🏆 | 260.54 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/main/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.19x faster | 110.94 🏆 | 50.64 |
| [clone](https://github.com/NaverPayDev/hidash/blob/main/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.28x faster | 54.14 🏆 | 3.13 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/main/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.16x faster | 1.92 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/main/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.19x faster | 292.09 🏆 | 91.52 |
| [every](https://github.com/NaverPayDev/hidash/blob/main/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.76x faster | 47.68 🏆 | 27.10 |
| [filter](https://github.com/NaverPayDev/hidash/blob/main/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.94x faster | 16.69 🏆 | 5.68 |
| [find](https://github.com/NaverPayDev/hidash/blob/main/src/find.ts) | src/find.bench.ts > find performance | hidash is 4.11x faster | 1608.24 🏆 | 391.15 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.39x faster | 4881.17 🏆 | 1112.93 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.65x faster | 4923.80 🏆 | 1059.40 |
| [first](https://github.com/NaverPayDev/hidash/blob/main/src/first.ts) | src/first.bench.ts > first performance | hidash is 8.86x faster | 501.39 🏆 | 56.61 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/main/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.18x faster | 66.03 🏆 | 56.12 |
| [get](https://github.com/NaverPayDev/hidash/blob/main/src/get.ts) | src/get.bench.ts > get performance | hidash is 2.88x faster | 1045.80 🏆 | 362.91 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/main/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.26x faster | 1074.26 | 1357.06 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/main/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.23x faster | 164.28 🏆 | 50.87 |
| [has](https://github.com/NaverPayDev/hidash/blob/main/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.30x faster | 466.52 🏆 | 202.62 |
| [includes](https://github.com/NaverPayDev/hidash/blob/main/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.90x faster | 40.16 🏆 | 5.82 |
| [isArray](https://github.com/NaverPayDev/hidash/blob/main/src/isArray.ts) | src/isArray.bench.ts > isArray performance | hidash is 8.87x faster | 526.81 🏆 | 59.39 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/main/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.84x faster | 216.26 🏆 | 19.95 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/main/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.67x faster | 5.45 🏆 | 0.82 |
| [isError](https://github.com/NaverPayDev/hidash/blob/main/src/isError.ts) | src/isError.bench.ts > isError performance | hidash is 14.90x faster | 85.70 🏆 | 5.75 |
| [isFunction](https://github.com/NaverPayDev/hidash/blob/main/src/isFunction.ts) | src/isFunction.bench.ts > isFunction performance | hidash is 20.90x faster | 3218.09 🏆 | 153.99 |
| [isMap](https://github.com/NaverPayDev/hidash/blob/main/src/isMap.ts) | src/isMap.bench.ts > isMap performance | hidash is 3.10x faster | 2548.00 🏆 | 822.74 |
| [isNumber](https://github.com/NaverPayDev/hidash/blob/main/src/isNumber.ts) | src/isNumber.bench.ts > isNumber performance | hidash is 7.98x faster | 2934.72 🏆 | 367.54 |
| [isUndefined](https://github.com/NaverPayDev/hidash/blob/main/src/isUndefined.ts) | src/isUndefined.bench.ts > isUndefined performance | hidash is 9.48x faster | 10462.23 🏆 | 1104.07 |
| [keys](https://github.com/NaverPayDev/hidash/blob/main/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.93x faster | 15.35 🏆 | 5.25 |
| [last](https://github.com/NaverPayDev/hidash/blob/main/src/last.ts) | src/last.bench.ts > last performance | hidash is 4.46x faster | 2306.36 🏆 | 516.87 |
| [lt](https://github.com/NaverPayDev/hidash/blob/main/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.00x faster | 158.35 🏆 | 52.76 |
| [map](https://github.com/NaverPayDev/hidash/blob/main/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.62x faster | 594.33 🏆 | 367.55 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/main/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.37x faster | 476.81 🏆 | 347.37 |
| [merge](https://github.com/NaverPayDev/hidash/blob/main/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 264.06 🏆 | 211.76 |
| [omit](https://github.com/NaverPayDev/hidash/blob/main/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.04x faster | 106.86 🏆 | 26.43 |
| [once](https://github.com/NaverPayDev/hidash/blob/main/src/once.ts) ⚠️ | src/once.bench.ts > once performance | lodash is 1.80x faster | 378367.93 | 679966.24 🏆 |
| [pick](https://github.com/NaverPayDev/hidash/blob/main/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.96x faster | 166.71 🏆 | 33.59 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/main/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.21x faster | 2.26 🏆 | 1.87 |
| [range](https://github.com/NaverPayDev/hidash/blob/main/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.32x faster | 26.52 🏆 | 20.02 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/main/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.47x faster | 1665.57 🏆 | 674.71 |
| [reverse](https://github.com/NaverPayDev/hidash/blob/main/src/reverse.ts) | src/reverse.bench.ts > reverse performance | hidash is 1.91x faster | 1112.39 🏆 | 581.10 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/main/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.98x faster | 18.15 🏆 | 6.08 |
| [size](https://github.com/NaverPayDev/hidash/blob/main/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.04x faster | 64.19 🏆 | 61.74 |
| [some](https://github.com/NaverPayDev/hidash/blob/main/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.29x faster | 18.48 🏆 | 8.08 |
| [sortBy](https://github.com/NaverPayDev/hidash/blob/main/src/sortBy.ts) | src/sortBy.bench.ts > sortBy performance | hidash is 1.24x faster | 2.23 🏆 | 1.80 |
| [sum](https://github.com/NaverPayDev/hidash/blob/main/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.07x faster | 184.43 🏆 | 60.05 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/main/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.34x faster | 137.99 🏆 | 102.76 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/main/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.49x faster | 95.85 🏆 | 11.30 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/main/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.02x faster | 92.09 🏆 | 30.45 |
| [toString](https://github.com/NaverPayDev/hidash/blob/main/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.95x faster | 34.98 🏆 | 17.94 |
| [transform](https://github.com/NaverPayDev/hidash/blob/main/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.12x faster | 249.29 🏆 | 79.87 |
| [trim](https://github.com/NaverPayDev/hidash/blob/main/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.98x faster | 35.44 🏆 | 11.91 |
| [union](https://github.com/NaverPayDev/hidash/blob/main/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.83x faster | 94.03 🏆 | 51.43 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/main/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.50x faster | 116.11 🏆 | 77.40 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/main/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.16x faster | 43.03 🏆 | 37.13 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/main/src/uniqWith.ts) | src/uniqWith.bench.ts > uniqWith performance | hidash is 1.03x faster | 15.90 🏆 | 15.49 |
| [unzip](https://github.com/NaverPayDev/hidash/blob/main/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.30x faster | 82.45 🏆 | 63.30 |
| [values](https://github.com/NaverPayDev/hidash/blob/main/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.75x faster | 131.52 🏆 | 6.05 |
| [zip](https://github.com/NaverPayDev/hidash/blob/main/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.14x faster | 49.01 🏆 | 43.09 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> 
> ⚠️ indicates where hidash is slower than lodash.
> 
> 🏆 indicates the faster implementation.


_Last updated: 2026-03-05_

*Last updated by [GitHub Actions](https://github.com/NaverPayDev/hidash/actions/runs/22704377699)*