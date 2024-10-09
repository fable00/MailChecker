const { Routes } = require('express')

const routes = Routes()

routes.use('/data', mailRouter)

module.exports = routes