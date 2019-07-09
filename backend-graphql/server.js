const express = require('express')
const app = express()
const mongoose = require('mongoose')
const graphqlExpress = require('express-graphql')
const todoSchema = require('./api/models/Todo/TodoSchema').TodoSchema

mongoose.connect('mongodb://localhost:27017/minha-db', {
    useNewUrlParser: true
})

app.use(
    '/graphql',
    graphqlExpress({
        schema: todoSchema,
        rootValue: global,
        graphiql: true
    })
)

app.listen(process.env.PORT || 3000, () =>
    console.log('my backend is running...')
)
