// This class provides an easy way to deal with the errors

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.errors = errors
        this.success = success
        this.success = false
        this.data = null

        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }