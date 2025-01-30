// This class will be used to easily give the response to the frontend

class ApiResponse {
    constructor(statusCode, message = "Success", data){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export {ApiResponse}