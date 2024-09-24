import Joi from "joi";

const placeSchema = Joi.object({
    name: Joi.string().required().min(4),
    address: Joi.string().required().min(10).max(60),
    photo: Joi.string().uri().required(),
    events:Joi.array().items(Joi.string().hex().length(24)),
    ocupancy: Joi.number().required(),
}).messages({
    'any.required': `The field {#label} is required`,
    
})


export default placeSchema