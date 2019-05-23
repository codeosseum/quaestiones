## Task

Your task is to create a module which exposes a single function that checks if the specified integer is a prime number.

The function should have the following signature:

~~~~JavaScript
function isPrime(n: Number): boolean
~~~~

## Behaviour

The function should have the following characteristics:

  * the input can be expected to be always a positive integer,
  * if `n` is a prime, the function should return `true`,
  * if `n` is not a prime, then function should return `false`.

## Examples

~~~~JavaScript
// returns true
isPrime(2);

// returns true
isPrime(13);

// returns false
isPrime(12);
~~~~
