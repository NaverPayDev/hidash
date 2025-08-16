# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: TINY (10) | lodash is 1.00x faster | 7713512.61 | 7713512.61 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: SMALL (100) | lodash is 1.00x faster | 1335085.38 | 1335085.38 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: MEDIUM (1000) | lodash is 1.00x faster | 145381.31 | 145381.31 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: LARGE (10000) | lodash is 1.00x faster | 14740.96 | 14740.96 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: TINY (10) | lodash is 1.00x faster | 1385211.80 | 1385211.80 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: SMALL (100) | lodash is 1.00x faster | 159389.32 | 159389.32 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: MEDIUM (1000) | lodash is 1.00x faster | 16012.63 | 16012.63 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: LARGE (10000) | lodash is 1.00x faster | 1581.05 | 1581.05 🏆 |
| [assign](https://github.com/NaverPayDev/hidash/blob/main/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.54x faster | 28.67 🏆 | 11.28 |
| [before](https://github.com/NaverPayDev/hidash/blob/main/src/before.ts) ⚠️ | src/before.bench.ts > before performance | lodash is 1.61x faster | 343051.70 | 552294.98 🏆 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/main/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.32x faster | 640.91 🏆 | 276.81 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/main/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.34x faster | 112.49 🏆 | 48.05 |
| [clone](https://github.com/NaverPayDev/hidash/blob/main/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.50x faster | 56.74 🏆 | 3.24 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/main/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.11x faster | 1.92 🏆 | 0.91 |
| [difference](https://github.com/NaverPayDev/hidash/blob/main/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.27x faster | 305.07 🏆 | 93.41 |
| [every](https://github.com/NaverPayDev/hidash/blob/main/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.84x faster | 51.15 🏆 | 27.86 |
| [filter](https://github.com/NaverPayDev/hidash/blob/main/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.38x faster | 15.33 🏆 | 6.44 |
| [find](https://github.com/NaverPayDev/hidash/blob/main/src/find.ts) | src/find.bench.ts > find performance | hidash is 4.02x faster | 1595.78 🏆 | 397.15 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.49x faster | 5050.32 🏆 | 1125.96 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.57x faster | 5027.14 🏆 | 1099.20 |
| [first](https://github.com/NaverPayDev/hidash/blob/main/src/first.ts) | src/first.bench.ts > first performance | hidash is 8.20x faster | 498.38 🏆 | 60.75 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/main/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.11x faster | 66.96 🏆 | 60.29 |
| [get](https://github.com/NaverPayDev/hidash/blob/main/src/get.ts) | src/get.bench.ts > get performance | hidash is 3.29x faster | 1087.83 🏆 | 331.04 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/main/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.13x faster | 1135.29 | 1288.42 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/main/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.32x faster | 174.40 🏆 | 52.57 |
| [has](https://github.com/NaverPayDev/hidash/blob/main/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.37x faster | 487.75 🏆 | 205.60 |
| [includes](https://github.com/NaverPayDev/hidash/blob/main/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.78x faster | 39.12 🏆 | 5.77 |
| [isArray](https://github.com/NaverPayDev/hidash/blob/main/src/isArray.ts) | src/isArray.bench.ts > isArray performance | hidash is 8.96x faster | 528.78 🏆 | 58.98 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/main/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.36x faster | 208.08 🏆 | 20.09 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/main/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.40x faster | 2.04 🏆 | 0.85 |
| [isError](https://github.com/NaverPayDev/hidash/blob/main/src/isError.ts) | src/isError.bench.ts > isError performance | hidash is 14.60x faster | 84.46 🏆 | 5.79 |
| [isFunction](https://github.com/NaverPayDev/hidash/blob/main/src/isFunction.ts) | src/isFunction.bench.ts > isFunction performance | hidash is 21.02x faster | 3306.34 🏆 | 157.32 |
| [isMap](https://github.com/NaverPayDev/hidash/blob/main/src/isMap.ts) | src/isMap.bench.ts > isMap performance | hidash is 3.03x faster | 2499.39 🏆 | 825.39 |
| [isNumber](https://github.com/NaverPayDev/hidash/blob/main/src/isNumber.ts) | src/isNumber.bench.ts > isNumber performance | hidash is 7.21x faster | 2903.99 🏆 | 402.70 |
| [isUndefined](https://github.com/NaverPayDev/hidash/blob/main/src/isUndefined.ts) | src/isUndefined.bench.ts > isUndefined performance | hidash is 9.39x faster | 10567.50 🏆 | 1125.56 |
| [keys](https://github.com/NaverPayDev/hidash/blob/main/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.24x faster | 16.03 🏆 | 4.94 |
| [last](https://github.com/NaverPayDev/hidash/blob/main/src/last.ts) | src/last.bench.ts > last performance | hidash is 4.75x faster | 2362.64 🏆 | 497.15 |
| [lt](https://github.com/NaverPayDev/hidash/blob/main/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.37x faster | 176.90 🏆 | 52.56 |
| [map](https://github.com/NaverPayDev/hidash/blob/main/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.61x faster | 595.62 🏆 | 369.73 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/main/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.29x faster | 447.10 🏆 | 345.84 |
| [merge](https://github.com/NaverPayDev/hidash/blob/main/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 269.19 🏆 | 213.51 |
| [omit](https://github.com/NaverPayDev/hidash/blob/main/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.99x faster | 110.37 🏆 | 27.63 |
| [once](https://github.com/NaverPayDev/hidash/blob/main/src/once.ts) ⚠️ | src/once.bench.ts > once performance | lodash is 1.78x faster | 378183.91 | 673415.17 🏆 |
| [pick](https://github.com/NaverPayDev/hidash/blob/main/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.99x faster | 163.07 🏆 | 32.69 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/main/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.22x faster | 2.31 🏆 | 1.89 |
| [range](https://github.com/NaverPayDev/hidash/blob/main/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.62x faster | 30.93 🏆 | 19.15 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/main/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.57x faster | 1673.10 🏆 | 651.67 |
| [reverse](https://github.com/NaverPayDev/hidash/blob/main/src/reverse.ts) | src/reverse.bench.ts > reverse performance | hidash is 1.82x faster | 1038.76 🏆 | 570.96 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/main/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.87x faster | 18.40 🏆 | 6.41 |
| [size](https://github.com/NaverPayDev/hidash/blob/main/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.02x faster | 62.35 | 63.50 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/main/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.33x faster | 18.62 🏆 | 8.00 |
| [sum](https://github.com/NaverPayDev/hidash/blob/main/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.07x faster | 183.82 🏆 | 59.90 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/main/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.32x faster | 135.49 🏆 | 102.28 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/main/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.06x faster | 95.96 🏆 | 11.90 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/main/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.96x faster | 93.73 🏆 | 31.62 |
| [toString](https://github.com/NaverPayDev/hidash/blob/main/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.97x faster | 34.66 🏆 | 17.57 |
| [transform](https://github.com/NaverPayDev/hidash/blob/main/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.75x faster | 239.73 🏆 | 87.21 |
| [trim](https://github.com/NaverPayDev/hidash/blob/main/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.91x faster | 35.36 🏆 | 12.16 |
| [union](https://github.com/NaverPayDev/hidash/blob/main/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.75x faster | 95.10 🏆 | 54.26 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/main/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.50x faster | 117.33 🏆 | 78.08 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/main/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.76x faster | 66.01 🏆 | 37.59 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/main/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.28 | 17.03 🏆 |
| [unzip](https://github.com/NaverPayDev/hidash/blob/main/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.24x faster | 80.83 🏆 | 65.01 |
| [values](https://github.com/NaverPayDev/hidash/blob/main/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.24x faster | 138.87 🏆 | 6.25 |
| [zip](https://github.com/NaverPayDev/hidash/blob/main/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.13x faster | 49.04 🏆 | 43.37 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> 
> ⚠️ indicates where hidash is slower than lodash.
> 
> 🏆 indicates the faster implementation.


_Last updated: 2025-08-16_

*Last updated by [GitHub Actions](https://github.com/NaverPayDev/hidash/actions/runs/17009510084)*