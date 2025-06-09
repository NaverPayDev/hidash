# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: TINY (10) | lodash is 1.00x faster | 7596285.74 | 7596285.74 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: SMALL (100) | lodash is 1.00x faster | 1335798.46 | 1335798.46 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: MEDIUM (1000) | lodash is 1.00x faster | 145037.01 | 145037.01 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: LARGE (10000) | lodash is 1.00x faster | 14289.78 | 14289.78 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: TINY (10) | lodash is 1.00x faster | 1347471.41 | 1347471.41 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: SMALL (100) | lodash is 1.00x faster | 164116.13 | 164116.13 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: MEDIUM (1000) | lodash is 1.00x faster | 16350.98 | 16350.98 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: LARGE (10000) | lodash is 1.00x faster | 1642.95 | 1642.95 🏆 |
| [assign](https://github.com/NaverPayDev/hidash/blob/main/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.29x faster | 26.28 🏆 | 11.47 |
| [before](https://github.com/NaverPayDev/hidash/blob/main/src/before.ts) ⚠️ | src/before.bench.ts > before performance | lodash is 1.63x faster | 343302.86 | 561021.96 🏆 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/main/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.28x faster | 627.51 🏆 | 275.45 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/main/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.35x faster | 112.45 🏆 | 47.90 |
| [clone](https://github.com/NaverPayDev/hidash/blob/main/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.85x faster | 57.63 🏆 | 3.23 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/main/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.18x faster | 1.94 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/main/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.22x faster | 305.27 🏆 | 94.81 |
| [every](https://github.com/NaverPayDev/hidash/blob/main/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.83x faster | 50.95 🏆 | 27.84 |
| [filter](https://github.com/NaverPayDev/hidash/blob/main/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 3.11x faster | 16.65 🏆 | 5.36 |
| [find](https://github.com/NaverPayDev/hidash/blob/main/src/find.ts) | src/find.bench.ts > find performance | hidash is 4.12x faster | 1604.66 🏆 | 389.62 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.33x faster | 4967.47 🏆 | 1146.41 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.51x faster | 5111.16 🏆 | 1132.25 |
| [first](https://github.com/NaverPayDev/hidash/blob/main/src/first.ts) | src/first.bench.ts > first performance | hidash is 8.49x faster | 525.37 🏆 | 61.90 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/main/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.19x faster | 72.05 🏆 | 60.60 |
| [get](https://github.com/NaverPayDev/hidash/blob/main/src/get.ts) | src/get.bench.ts > get performance | hidash is 2.98x faster | 1096.48 🏆 | 367.95 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/main/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.30x faster | 1047.79 | 1360.55 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/main/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.34x faster | 175.04 🏆 | 52.36 |
| [has](https://github.com/NaverPayDev/hidash/blob/main/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.32x faster | 481.64 🏆 | 207.77 |
| [includes](https://github.com/NaverPayDev/hidash/blob/main/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.65x faster | 39.24 🏆 | 5.90 |
| [isArray](https://github.com/NaverPayDev/hidash/blob/main/src/isArray.ts) | src/isArray.bench.ts > isArray performance | hidash is 8.70x faster | 529.15 🏆 | 60.80 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/main/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.62x faster | 212.12 🏆 | 19.98 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/main/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.28x faster | 5.45 🏆 | 0.87 |
| [isError](https://github.com/NaverPayDev/hidash/blob/main/src/isError.ts) | src/isError.bench.ts > isError performance | hidash is 14.31x faster | 83.61 🏆 | 5.84 |
| [isFunction](https://github.com/NaverPayDev/hidash/blob/main/src/isFunction.ts) | src/isFunction.bench.ts > isFunction performance | hidash is 20.25x faster | 3215.75 🏆 | 158.80 |
| [isMap](https://github.com/NaverPayDev/hidash/blob/main/src/isMap.ts) | src/isMap.bench.ts > isMap performance | hidash is 2.93x faster | 2466.52 🏆 | 840.65 |
| [isNumber](https://github.com/NaverPayDev/hidash/blob/main/src/isNumber.ts) | src/isNumber.bench.ts > isNumber performance | hidash is 7.33x faster | 2990.22 🏆 | 407.81 |
| [keys](https://github.com/NaverPayDev/hidash/blob/main/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.99x faster | 16.01 🏆 | 5.35 |
| [last](https://github.com/NaverPayDev/hidash/blob/main/src/last.ts) | src/last.bench.ts > last performance | hidash is 4.34x faster | 2369.51 🏆 | 545.35 |
| [lt](https://github.com/NaverPayDev/hidash/blob/main/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.29x faster | 173.58 🏆 | 52.78 |
| [map](https://github.com/NaverPayDev/hidash/blob/main/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.66x faster | 603.71 🏆 | 362.80 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/main/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.41x faster | 485.83 🏆 | 344.99 |
| [merge](https://github.com/NaverPayDev/hidash/blob/main/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 278.84 🏆 | 222.23 |
| [omit](https://github.com/NaverPayDev/hidash/blob/main/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.06x faster | 109.37 🏆 | 26.93 |
| [once](https://github.com/NaverPayDev/hidash/blob/main/src/once.ts) ⚠️ | src/once.bench.ts > once performance | lodash is 1.55x faster | 433902.28 | 674510.31 🏆 |
| [pick](https://github.com/NaverPayDev/hidash/blob/main/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.85x faster | 164.45 🏆 | 33.94 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/main/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.21x faster | 2.28 🏆 | 1.89 |
| [range](https://github.com/NaverPayDev/hidash/blob/main/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.53x faster | 30.96 🏆 | 20.17 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/main/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.37x faster | 1651.36 🏆 | 696.39 |
| [reverse](https://github.com/NaverPayDev/hidash/blob/main/src/reverse.ts) | src/reverse.bench.ts > reverse performance | hidash is 1.88x faster | 1122.63 🏆 | 598.24 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/main/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.93x faster | 18.37 🏆 | 6.28 |
| [size](https://github.com/NaverPayDev/hidash/blob/main/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.01x faster | 63.99 🏆 | 63.54 |
| [some](https://github.com/NaverPayDev/hidash/blob/main/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.51x faster | 18.57 🏆 | 7.40 |
| [sum](https://github.com/NaverPayDev/hidash/blob/main/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.09x faster | 185.68 🏆 | 60.15 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/main/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.32x faster | 136.53 🏆 | 103.65 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/main/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.86x faster | 90.55 🏆 | 11.52 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/main/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.97x faster | 91.76 🏆 | 30.87 |
| [toString](https://github.com/NaverPayDev/hidash/blob/main/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.92x faster | 34.07 🏆 | 17.77 |
| [transform](https://github.com/NaverPayDev/hidash/blob/main/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.76x faster | 240.83 🏆 | 87.14 |
| [trim](https://github.com/NaverPayDev/hidash/blob/main/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.92x faster | 35.85 🏆 | 12.28 |
| [union](https://github.com/NaverPayDev/hidash/blob/main/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.67x faster | 94.86 🏆 | 56.71 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/main/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.47x faster | 118.52 🏆 | 80.42 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/main/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.76x faster | 66.36 🏆 | 37.61 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/main/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.18 | 17.07 🏆 |
| [unzip](https://github.com/NaverPayDev/hidash/blob/main/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.34x faster | 74.81 🏆 | 55.98 |
| [values](https://github.com/NaverPayDev/hidash/blob/main/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.94x faster | 139.68 🏆 | 6.09 |
| [zip](https://github.com/NaverPayDev/hidash/blob/main/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.13x faster | 48.86 🏆 | 43.20 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> 
> ⚠️ indicates where hidash is slower than lodash.
> 
> 🏆 indicates the faster implementation.


_Last updated: 2025-06-09_

*Last updated by [GitHub Actions](https://github.com/NaverPayDev/hidash/actions/runs/15527419621)*