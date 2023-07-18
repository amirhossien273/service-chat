const { getResponse, validator } = require("../helpers/helpers");


const chatCreateMiddleware = async (req, res, next) => {
    const validationRule = {
        "appointment_id": "required",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
             getResponse(res, 422, {message: 'Validation failed', data: err})
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports = {
    chatCreateMiddleware
};