const express = require('express')
const userRouter = require('./api/user-router')

const server = express()

server.use(express.json())

server.use('/api', userRouter)

server.use((err, req, res, next) => {
    res.status(500).json({message: 'Sorry, request could not be completed!'})
})

module.exports = server