const mongoose = require('mongoose')
const Schedule = require('../models/Schedule')

exports.create = (req, res) => {
    Schedule.create(req.body, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
    })
}

exports.list = (req, res) => {
    Schedule.find({}, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
    })
}

exports.get = (req, res) => {
    const { id } = req.params
    Schedule.findById(id, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
        if (!err && !result) res.status(404).send()
    })
}

exports.update = (req, res) => {
    const { id } = req.params
    Schedule.findByIdAndUpdate(id, req.body, { new: true }, (err, result) => {
        if (err) res.send(err)
        if (result) res.send(result)
        if (!err && !result) res.status(404).send()
    })
}

exports.delete = (req, res) => {
    const { id } = req.params
    Schedule.findByIdAndRemove(id, (err, result) => {
        if (err) res.send(err)
        if (result) res.status(200).send({ success: true })
        if (!err && !result) res.status(404).send()
    })
}
