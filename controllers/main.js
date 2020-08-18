module.exports.getView = (req, res, next) => {
    res.status(200).render("index", {
        pageTitle: "index"
    });
};
