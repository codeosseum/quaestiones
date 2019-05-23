## Task

Your task is to create a module which exposes a single function capable of summing the elements of an array.

The function should have the following signature:

~~~~JavaScript
function arraySum(array: number[]): number
~~~~

## Behaviour

The function should have the following characteristics:

  * if the passed argument *is not* an array, the function should return `0`,
  * if the passed argument *is* an array, the function should return the sum of the elements.

## Notes

The elements are guaranteed to be `Number`s.

## Examples

~~~~JavaScript
// returns 1
arraySum([1])

// returns 0
arraySum([-1, 0, 1])

// returns 0
arraySum(null);
~~~~
