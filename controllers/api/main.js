module.exports.getJson = (req, res, next) => {
    res.status(200).json({
        message: "index"
    });
};
