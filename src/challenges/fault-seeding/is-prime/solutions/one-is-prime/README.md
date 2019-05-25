# One Is Prime

Reports `1` as a prime number.

## Breakdown

The loop starts from `2` and runs up to the square root of `n`. In this case, the square root is `1`, therefore we won't even enter the loop.

~~~~js
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
~~~~

Thus, no checks are performed and we simply return `true`.

~~~~js
    return true;
};

module.exports = isPrime;
~~~~
