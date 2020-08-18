// 3rd party
const i18n = require("i18n");

module.exports.getJson = (req, res, next) => {
    // i18n.setLocale("sk");
    i18n.__("hallo:test");
    res.status(200).json({
        i18n: i18n.__("hallo")
    });
};

module.exports.getView = (req, res, next) => {
    res.status(200).render("index", {
        pageTitle: "index"
    });
};

module.exports.getTestI18n = (req, res, next) => {
    res.status(200).json({
        test: "test i18n-node"
    });
};
