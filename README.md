# @naverpay/hidash

[![CI](https://github.com/NaverPayDev/hidash/actions/workflows/matrix.yaml/badge.svg)](https://github.com/NaverPayDev/hidash/actions/workflows/matrix.yaml)

A modern, performance-focused alternative to Lodash.

## Features 

-   🚀 **Dual Package Support (CJS, ESM)**: Built for modern JavaScript, optimized for tree-shaking
-   ⚡️ **High Performance**: Consistently faster than Lodash in benchmarks (verified with Vitest)
-   🔄 **Drop-in Replacement**: 100% compatible with Lodash's interface and behavior
-   🎯 **Type Safety**: Written in TypeScript with complete type definitions
-   📦 **Subpath Imports**: Granular imports for minimal bundle size
-   🧪 **Test Coverage**: Every function has test cases that match Lodash's behavior exactly
-   0️⃣ **Zero Dependencies**: No external runtime dependencies, keeping your bundle lean
-   ✅ **Proven Reliability**: Used in production at NAVER Pay

## Installation

```bash
npm install @naverpay/hidash
# or
yarn add @naverpay/hidash
# or
pnpm add @naverpay/hidash
```

## Usage

Import functions individually using subpath imports:

```typescript
import has from '@naverpay/hidash/has'
import isEmpty from '@naverpay/hidash/isEmpty'
import isObject from '@naverpay/hidash/isObject'

// Same interface as Lodash
has(object, 'user.name') // true
isEmpty([]) // true
isObject({}) // true
```

❌ Package does not support namespace imports:

```typescript
// This will not work
import {has, isEmpty} from '@naverpay/hidash'
```

## Why hidash?

-   **Modern**: Built specifically for subpath imports for optimal tree-shaking
-   **Performance**: Optimized implementations that outperform Lodash in most scenarios
-   **Compatibility**: Designed as a drop-in replacement with identical interfaces and behavior
-   **Tested**: Comprehensive test suite ensuring Lodash compatibility and performance benchmarks

## Test Coverage

- [Test Coverage](https://naverpaydev.github.io/hidash/#/)

## Benchmark

- [Link](./BENCHMARK.md)

## Contributing

Contributions are welcome!

### Feature Requests

Want additional Lodash methods to be implemented? Please create an issue with:

-   The method name
-   Use case description
-   Current workaround (if any)

We prioritize implementing new methods based on community needs.

### Pull Requests

Feel free to submit PRs for:

-   Bug fixes
-   Performance improvements
-   New utility methods
-   Documentation improvements

Please read our contributing guidelines before submitting PRs.

### Commenting Guidelines

To ensure code readability and maintainability, please follow these guidelines when adding comments to the codebase:

#### 1. Function Header Comments (Required)

- **Description:** Clearly and concisely describe the purpose and behavior of the function.
- **Params:** List and explain all parameters.
- **Returns:** Describe the return value(s).

**Example:**

```js
/**
 * @description
 * Returns a new array with the results of calling a provided function on every element in the collection.
 * 
 * @param {Array|Object} collection - The collection to iterate over.
 * @param {Function} iteratee - The function invoked per iteration.
 * @returns {Array} The new mapped array.
 */
```

#### 2. Internal Comments (Optional)

- Add internal comments only when necessary, such as for:
  - Explaining complex logic
  - Highlighting performance improvements
  - Noting non-obvious implementation details
- Keep these comments concise and focused.

#### 3. Consistency with lodash

- Most function names are identical to lodash.
- However, **@naverpay/hidash** may introduce enhancements (e.g., improved type safety, interface changes).
- Please clearly document any differences or improvements from lodash in the relevant function’s header comment.

#### 4. General Best Practices

- Keep comments up to date with code changes.
- Avoid redundant or obvious comments.
- Use English for all comments.

## License

MIT License - see the [LICENSE.md](LICENSE) file for details.

---

Made with ❤️ by NAVER Financial frontend team.
