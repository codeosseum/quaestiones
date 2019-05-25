function emailValidation(email) {
    const [a, b] = email.split('@');

    if (a.length == 0 || b.length == 0) {
        return false
    }

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'    
    const chars2 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-'

    const firstA = a[0]

    if (!chars.includes(firstA)) {
        return false;
    }

    for (let i = 1; i < a.length; ++i) {
        if (!chars2.includes(a[i])) {
            return false;
        }
    }

    const [c, d] = b.split('.');

    if (c.length == 0 || d.length == 0) {
        return false
    }

    const firstC = c[0]

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
