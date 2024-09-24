function handleError(error,req,res,next) {   
    res.status(error.statusCode).json({error:true, message: error.message})
}

export default handleError