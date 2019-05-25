# Missing Dot Validation

Does not enforce the presence of the dot character.

## Breakdown

A classic escaping issue: the `.` character at the end of the regexp is not escaped. Thus, it does not correspond to a literal `dot` character, but any character.

~~~~JavaScript
function emailValidation(email) {
    return email.match(/[a-zA-Z0-9][a-zA-Z0-9\-\_]*\@[a-zA-Z0-9][a-zA-Z0-9\-\_]*.[a-zA-Z]+/)
};

module.exports = emailValidation;
~~~~
