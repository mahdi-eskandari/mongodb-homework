const middleUser = (req, res, next) => {
    console.log(`request method: ${req.method}, request url: ${req.url}`);
    next()
}

module.exports = middleUser