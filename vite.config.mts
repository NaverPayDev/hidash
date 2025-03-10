import {createViteConfig} from '@naverpay/pite'

import moduleMap from './index'

export default createViteConfig({
    cwd: '.',
    formats: ['cjs', 'es'],
    entry: moduleMap,
    ignoredPolyfills: [
        'es.array.push', // https://bugs.chromium.org/p/v8/issues/detail?id=12681
        'es.array.includes', // https://bugzilla.mozilla.org/show_bug.cgi?id=1767541
        'es.array.reduce', // https://issues.chromium.org/issues/40672866
        'es.string.trim', // https://github.com/zloirock/core-js/issues/480#issuecomment-457494016 safari bug
        'es.regexp.flags', // https://github.com/zloirock/core-js/commit/9017066b4cb367c6609e4473d43d6e6dad8031a5#diff-59f90be4cf68f9d13d2dce1818780ae968bf48328da4014b47138adf527ec0fcR1066
        'es.array.reverse', // https://bugs.webkit.org/show_bug.cgi?id=188794,
        'es.array.sort',
    ],
})
