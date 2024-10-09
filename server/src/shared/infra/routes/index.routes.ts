const { Routes } = require('express')
const useMailRouter = require('../../../modules/mail/infra/routes/mail.routes')

const route = Routes()
route.use('/data', useMailRouter)
module.exports = route