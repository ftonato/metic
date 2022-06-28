# Metic

> Easy math decimals for JS
>  
> `metic.add(0.1, 0.2, 2) === 0.3`

This is a simple and useful package to help you on arithmetics.

----
## Context

If you've ever tried to sum decimal numbers in JavaScript, you were definitely surprised...

We know that `0.1 + 0.1` is, as you expect, `0.2`.

But sometimes you get some unexpected result.

As for `0.1 + 0.2`.

The result is not `0.3` as you would expect, but it is `0.30000000000000004`.

Yes, the first time I was surprised too. However, if you search further to find out what happens via these links:

- [Why 0.1 + 0.2 == 0.3 is false in JS?](https://gauravkk22.medium.com/why-0-1-0-2-0-3-is-false-in-js-mystery-unsolved-with-solution-4f7db2755f18)
- [Why 0.1 + 0.2 ≠ 0.3 in JavaScript](https://javascript.plainenglish.io/why-0-1-0-2-0-3-in-javascript-d7e218224a72)

----
## Install

```sh
npm install metic
```

### Usage
```javascript
import metic from 'metic'
// import {metic} from 'metic'

metic.add(0.1, 0.2) // => 0.3
```

You can also use as many decimals places as you like and ensure the value will be as close to what you expect.

```javascript
import metic from 'metic'
// import {metic} from 'metic'

/**
 * Calculate the sum of two decimals properly.
 * @param {number} a - First value to be considered in the sum.
 * @param {number} b - Second value to be considered in the sum.
 * @param {number} positions - Number of decimals we expect as our result.
 */
metic.add(0.1, 0.222, 3) // => 0.322
```

## LICENSE

[MIT](./LICENSE)
