function logger(req, res, next) {
    console.log(`${req.method} to ${req.path}`);
    return next();
}

module.exports = {logger}