const mongoose = require('mongoose')
const User = require('../models/User')

exports.create = (req, res) => {
    User.create(req.body, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
    })
}

exports.get = (req, res) => {
    const { id } = req.params
    User.findById(id, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
        if (!err && !result) res.status(404).send()
    })
}

exports.auth = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email, password }, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
        if (!err && !result)
            res.status(200).send({ error: 'E-mail ou senha incorretos.' })
    })
}
