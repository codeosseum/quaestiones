# Incorrect @ Check

Will allow more than one `@` character and will throw if there's none.

## Breakdown

Let's start with a split using the `@` character as a delimiter.

What should we expect:

  * If there is a single `@` in the `email`, then this approach is okay.
  * If there's no `@`, then `b` will be `undefined`.
  * If there are two or more `@`s, then we will not check the parts after the second `@`.

~~~~JavaScript
function emailValidation(email) {
    const [a, b] = email.split('@');
~~~~

Here, if `b` is `undefined`, the function will throw.

~~~~js
    if (a.length == 0 || b.length == 0) {
        return false;
    }
~~~~

Everything else is okay.

~~~~js
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const chars2 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';

    const firstA = a[0];

    if (!chars.includes(firstA)) {
        return false;
    }

    for (let i = 1; i < a.length; ++i) {
        if (!chars2.includes(a[i])) {
            return false;
        }
    }

    const dotSplit = b.split('.');

    if (dotSplit.length != 2) {
        return false;
    }

    const [c, d] = dotSplit;

    if (c.length == 0 || d.length == 0) {
        return false;
    }

    const firstC = c[0];

    if (!chars.includes(firstC)) {
        return false;
    }

    for (let i = 1; i < c.length; ++i) {
        if (!chars2.includes(c[i])) {
            return false;
        }
    }

    for (let i = 1; i < d.length; ++i) {
        if (!chars.includes(d[i])) {
            return false;
        }
    }

    return true;
};

module.exports = emailValidation;
~~~~
