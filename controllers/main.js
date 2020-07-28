module.exports.getJson = (req, res, next) => {
    res.status(200).json({
        msg: "Express boilerplate"
    });
};

module.exports.getView = (req, res, next) => {
    res.status(200).render("index", {
        pageTitle: "index"
    });
};
