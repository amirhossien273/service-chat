const Validator = require('validatorjs');

const getResponse = (res, status, data) => {

    return res.status(500).json(data);
};

const validator = async (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

module.exports = { getResponse, validator };