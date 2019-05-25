# Is Prime?

## Task

Your task is to create a module which exposes a single function that checks if the specified integer is a prime number.

## Signature

The function should have the following signature:

~~~~JavaScript
function isPrime(n: number): boolean
~~~~

## Behaviour

The function should have the following characteristics:

  * the input can be expected to be always a positive integer,
  * if `n` is a prime, then the function should return `true`,
  * if `n` is not a prime, then the function should return `false`.

## Examples

~~~~JavaScript
// returns true
isPrime(2);

// returns true
isPrime(13);

// returns false
isPrime(12);
~~~~
