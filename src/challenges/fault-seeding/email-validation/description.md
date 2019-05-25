## Task

Your task is to create a module which exposes a single function capable of validating email addresses.

Valid email addresses are of the form

~~~~
X@Y.Z
~~~~

where

 * `X` and `Y` are at least one character long strings containing any upper- or lowercase letter of the English alphabet, any digit, as well as a dash ('-') or an underscore ('_'). Note, however, that it **must** not start with neither a dash nor an underscore.
 * `Z` is a string consisting of at least one character, containing only upper- or lowercase letters of the English alphabet.

## Signature

The function should have the following signature:

~~~~JavaScript
function emailValidation(email: string): boolean
~~~~

## Behaviour

The function should have the following characteristics:

  * the input is always a String, it will never be `null` or `undefined`,
  * if the `email` argument is a valid email address, then the function should return `true`,
  * otherwise, `false` should be returned.

## Examples

~~~~JavaScript
// returns false
emailValidation('')

// returns false
emailValidation('a')

// returns false
emailValidation('-abc_9@cb-dd.com')

// returs true
emailValidation('hello@codeosseum.com')
~~~~
