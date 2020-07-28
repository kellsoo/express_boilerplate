module.exports.getMain = (req, res, next) => {
    res.json({
        msg: "Express boilerplate"
    });
};

module.exports.getView = (req, res, next) => {
    res.status(200).render("index", {
        pageTitle: "index"
    });
};
