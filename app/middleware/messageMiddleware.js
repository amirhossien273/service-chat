const { getResponse, validator } = require("../helpers/helpers");


const messageCreateMiddleware = async (req, res, next) => {
    const validationRule = {
        "text": "string",
        "chat_id": "required|string",
        "sender_id": "required|string",
        "media_id": "string"
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
    messageCreateMiddleware
};