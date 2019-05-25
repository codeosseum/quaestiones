function emailValidation(email) {
    return email.match(/[a-z0-9\-\_]+\@[a-z0-9\-\_]+\.[a-zA-Z]+/)
};

module.exports = emailValidation;
