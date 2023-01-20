const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')

const authentication = require('./routes/authRoutes/authentication.js')
const aiRoutes = require('./routes/aiRoutes/aiRoutes')


const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/academic-involvement', aiRoutes)
app.use('/authentication', authentication)


app.listen(3000)