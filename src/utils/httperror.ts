class HttpError extends Error {
    message: string
    statusCode: StatusCode
    code: number
    constructor(message: string, statusCode: StatusCode, code?: number) {
        super(message)
        this.statusCode = statusCode
        this.code = code
    }
}

enum StatusCode {
    BadRequest = 400,
    Forbidden = 403,
    InternalError = 500
}

export {
    HttpError,
    StatusCode
}