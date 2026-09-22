const Joi = require("joi");

const userSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .required(),

    email: Joi.string()
        .trim()
        .email()
        .required()
});

const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Invalid user data",
            error: error.details[0].message
        });
    }

    next();
};

module.exports = validateUser;