function emailValidation(email) {
    return email.match(/[a-zA-Z0-9][a-zA-Z0-9\-\_]*\@[a-zA-Z0-9][a-zA-Z0-9\-\_]*.[a-zA-Z]+/)
};

module.exports = emailValidation;
