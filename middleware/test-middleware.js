module.exports = (req, res, next) => {
    console.log("test middleware");
    next();
};
