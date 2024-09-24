import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string().required().min(4),
    lastname: Joi.string().required().min(4),
    photo: Joi.string().uri().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required().min(8).max(16),
    age: Joi.number().required(),
    genre:Joi.string().alphanum(),
    events:Joi.array().items(Joi.string().hex().length(24)),
}).messages({
    'any.required': `The field {#label} is required`,
    
})

export default userSchema