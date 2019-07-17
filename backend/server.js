const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const db = require('./config/database.config')

const todoRoutes = require('./api/routes/Todo')
const scheduleRoutes = require('./api/routes/Schedule')
const userRoutes = require('./api/routes/User')

const app = express()

app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: '15mb'
    })
)
app.use(
    bodyParser.json({
        limit: '15mb'
    })
)
app.use(morgan('dev'))
app.use(bodyParser.json())

mongoose.connect(db.url, { useNewUrlParser: true })

require('./api/models/Todo')
require('./api/models/Schedule')
require('./api/models/User')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type,  Accept'
    )

    next()
})

userRoutes(app)
todoRoutes(app)
scheduleRoutes(app)
app.listen(process.env.PORT || 3000, () =>
    console.log('my backend is running...')
)
