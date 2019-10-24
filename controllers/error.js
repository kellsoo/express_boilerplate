exports.get404 = (req, res, next) => {
    // send file from views/html
    // res.sendFile(path.join(__dirname, 'views', '404.html'));
    // render pug file
    res.status(404).render('404', {
        pageTitle: "404",
    });
}