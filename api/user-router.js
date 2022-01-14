const express = require('express')

const router = express.Router()

let users = require('../data/user-data')

const {validateUser} = require('../middleware')

router.get('/users', (req, res, next) => { 
    if (!users) {
        next()
    } else {
        res.status(200).json(users)
    }
})

router.post('/register', validateUser, (req, res, next) => {
    const { username, password } = req.body
    const newUser = { username, password }
    users = [...users, newUser]
    res.status(200).json(users)
})
    

module.exports = router