const express = require('express')

const router = express.Router()

const users  = require('../data/user-data')

router.get('/users', (req, res, next) => { 
    if (!users) {
        next()
    } else {
        res.status(200).json(users)
    }
})

router.post()
    

module.exports = router