# Dash and Underscore First

Allows dash and underscore as first characters in the X and Y part.

## Breakdown

Looking at the regexp, one can see, that the part before the `@` character is only validated by a single rule: `[a-zA-Z0-9\-\_]+`. This permits the use of the `-` and `_` characters as first characters.

~~~~js
function emailValidation(email) {
    return email.match(/[a-zA-Z0-9\-\_]+\@[a-zA-Z0-9\-\_]+\.[a-zA-Z]+/);
};

module.exports = emailValidation;
~~~~
