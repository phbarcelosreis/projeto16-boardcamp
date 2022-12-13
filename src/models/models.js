import Joi from "joi";

export const categoriesCheck = Joi.object({
    name: Joi.string().min(3).required()
});

export const customerCheck = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().pattern(/^[0-9]+$/).length(11).required(),
    phone: Joi.string().min(10).max(11).pattern(/^[0-9]+$/).required(),
    birthday: Joi.date().required(),
});
