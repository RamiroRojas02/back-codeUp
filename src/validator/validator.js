import CustomError from "../utils/customError.js";

function validator(schema) {
    return function(req,res,next){
        const validate = schema.validate(req.body,{abortEarly:true})
        
        if(validate.error)throw new CustomError(validate.error.details[0].message,409)
        
        next()
    }
}

export default validator