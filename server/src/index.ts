const express = require('express')
const app = express()
const useRoute = require('../src/shared/infra/routes/index.routes')

app.use(express.json())
app.use(useRoute)


app.listen('8080', ()=> console.log('Running on 8080'))