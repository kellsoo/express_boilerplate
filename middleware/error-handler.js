module.exports = (error, req, res, next) => {
    console.log(error);
    const { statusCode, message, data } = error;
    res.status(statusCode).json({
        message,
        data
    });
};
