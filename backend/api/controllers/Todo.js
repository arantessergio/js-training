const mongoose = require('mongoose')
const Todo = require('../models/Todo')

exports.create = (req, res) => {
    const schedule = req.params.id
    const todo = req.body
    todo.schedule = schedule
    Todo.create(todo, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
    })
}

exports.list = (req, res) => {
    const schedule = req.params.id
    Todo.find({ schedule }, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
    })
}

exports.get = (req, res) => {
    const { id } = req.params
    Todo.findById(id, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
        if (!err && !result) res.status(404).send()
    })
}

exports.update = (req, res) => {
    const { id } = req.params
    Todo.findByIdAndUpdate(id, req.body, { new: true }, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
        if (!err && !result) res.status(404).send()
    })
}

exports.delete = (req, res) => {
    const { id } = req.params
    Todo.findByIdAndRemove(id, (err, result) => {
        if (err) res.send(err)
        if (result) res.status(200).send({ success: true })
        if (!err && !result) res.status(404).send()
    })
}
