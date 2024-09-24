
class CustomError extends Error {
    //add new property for status response
    statusCode
    // When use the method 'new' to create an error 
    
    constructor(message,statusCode = 400) {
        super(message)
        this.statusCode = statusCode
    }
}

export default CustomError