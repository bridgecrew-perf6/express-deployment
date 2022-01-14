

function validateUser(req, res, next) {
    const { username, password } = req.body
    if (!username || !username.trim() || !password || !password.trim()) {
        res.status(400).json({message: 'bad request'})
    } else {
        next()
    }
}

module.exports = {validateUser}