const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScheduleSchema = new Schema (
    {
        description: String,
        date: Date
    }
)

module.exports = mongoose.model('Schedule', ScheduleSchema)