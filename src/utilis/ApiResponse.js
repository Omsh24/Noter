// This class will be used to easily give the response to the frontend

class ApiResponse {
    constructor(
        statusCode,
        message = "Success",
        data
    ){
        this.statusCode = statusCode
        this.message = message
        this.data = data
        // mostly error indicating status code are under 400 so this is fine
        this.success = success < 400
    }
}

export { ApiResponse }