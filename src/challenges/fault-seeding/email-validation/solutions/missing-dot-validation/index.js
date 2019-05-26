function emailValidation(email) {
    return /^[a-zA-Z0-9][a-zA-Z0-9\-\_]*\@[a-zA-Z0-9][a-zA-Z0-9\-\_]*.[a-zA-Z]+$/.test(email);
};

module.exports = emailValidation;
