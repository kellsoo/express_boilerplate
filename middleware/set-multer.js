// multer
const multer = require("multer");

// multer settings
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const mimetype = file.mimetype;
    const conPng = mimetype === "image/png";
    const conJpg = mimetype === "image/jpg";
    const conJpeg = mimetype === "image/jpeg";

    if (conPng || conJpg || conJpeg) cb(null, true);
    else cb(null, false);
};

const setMulter = multer({ storage: fileStorage, fileFilter: fileFilter }).single("image");

// single - for incoming request - the name of field with file!!!
module.exports = setMulter;
