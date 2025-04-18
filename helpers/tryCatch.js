
const { validationResult } = require('express-validator');
const getError = require('./getError');

const tryCatch = controller => async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = [...errors.array().map((err) => err.msg)].join('; ');
            throw getError(400, errorMessage)
        }

        await controller(req, res);
    } catch (err) {
        return next(err);
    }
};

module.exports = tryCatch;
