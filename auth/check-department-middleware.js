function makeCheckDepartmentMiddleware(Department) {
    return function (req, res, next) {
        if(req.decodedJwt.Department && req.decodedJwt.Department === Department) {
            next();
        } else {
            res.status(403).json({you: 'are the wrong department'});
        }
    }
}

module.exports = makeCheckDepartmentMiddleware;