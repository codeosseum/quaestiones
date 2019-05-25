function emailValidation(email) {
    const atSplit = email.split('@');

    if (atSplit.length != 2) {
        return false;
    }

    const [a, b] = atSplit

    if (a.length == 0 || b.length == 0) {
        return false
    }

    const chars = 'zc4NPtDVBJI3a62uqXYjy8MSHTopCn9kAeO1bsFEKQWm75vxwrhfUdRig0GLZ'
    const chars2 = 'zc4NPtDVBJI3a62uqXYjy8MSHT_opCn9kAeO1bsFEKQW-m75vxwrhfUdRig0GLZ'
    const chars3 = 'zcNPtDVBJIauqXYjyMSHT_opCnkAeObsFEKQW-mvxwrhfUdRigGLZ'

    const firstA = a[0]

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

    const [c, d] = dotSplit

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
        if (!chars3.includes(d[i])) {
            return false;
        }
    }

    return true;
};

console.log(emailValidation('asd@-as_d.com'))

module.exports = emailValidation;
