# Four Is Prime

Reports `4` as a prime number.

## Breakdown

Check for `1` which is not a prime.

~~~~js
function isPrime(n) {
    if (n == 1) {
        return false;
    }
~~~~

Here we have a loop which runs while `i` is less than the square root of `n`. In the case of `4`, the square root is `2`, therefore we won't even enter the loop.

~~~~js
    for (let i = 2; i < Math.sqrt(n); i++) {
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
