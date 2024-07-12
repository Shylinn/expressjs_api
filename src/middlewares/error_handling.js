import createError from 'http-errors'
export const badRequests = (req, res, next) => {
    const error = createError.NotFound("không tìm thấy route này")
    return res.status(error.status).json({
        errorCode: error.status,
        message: error.message
    })
}

export const internalError = (req, res, next) => {
    const error = createError.InternalServerError("Lỗi server cmnr");
    return res.status(error.status).json({
        errorCode: error.status,
        message: error.message
    })
}

