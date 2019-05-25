# Array Sum

## Task

Your task is to create a module which exposes a single function capable of summing the elements of an array.

## Signature

The function should have the following signature:

~~~~JavaScript
function arraySum(array: any): number
~~~~

## Behaviour

The function should have the following characteristics:

  * if the passed argument *is not* an array, the function should return `0`,
  * if the passed argument *is* an array, the function should return the sum of the elements.

## Notes

If the argument is an array, then the elements are guaranteed to be `Number`s.

## Examples

~~~~JavaScript
// returns 1
arraySum([1])

// returns 0
arraySum([-1, 0, 1])

// returns 0
arraySum(null);
~~~~
