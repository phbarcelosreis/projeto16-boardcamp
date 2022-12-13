import Joi from "joi";

export const categoriesCheck = Joi.object({
    name: Joi.string().min(3).required()
});