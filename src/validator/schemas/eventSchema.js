import Joi from "joi";

const eventSchema = Joi.object({
    place: Joi.string().required().hex().length(24),
    date: Joi.date().greater('1-1-2020').required(),
    name: Joi.string().required().min(4),
    photo: Joi.string().uri().required(),
    description: Joi.string().required().min(30).max(1000),
    attendees:Joi.array().items(Joi.string().required().hex().length(24)),
    minimunAge: Joi.number().required(),
    organizer:Joi.string().required().hex().length(24),

}).messages({
    'any.required': `The field {#label} is required`,
    
})

export default eventSchema