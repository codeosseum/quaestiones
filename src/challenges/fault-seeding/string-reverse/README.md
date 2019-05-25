# String Reverse

## Task

Your task is to create a module which exposes a single function capable of reversing a string.

## Signature

The function should have the following signature:

~~~~JavaScript
function stringReverse(str: any): string
~~~~

## Behaviour

The function should have the following characteristics:

  * if the passed argument *is not* a string, the function should throw a `TypeError`, with the following message: "Expected a single string argument.",
  * if the passed argument *is* a string, the function should return the reversed version of the string.

## Examples

~~~~JavaScript
// returns 'a'
stringReverse('a')

// returns 'abba'
stringReverse('abba')

// returns 'cba'
stringReverse('abc')

// throws a TypeError with the appropriate messsage
arraySum(null)
~~~~
