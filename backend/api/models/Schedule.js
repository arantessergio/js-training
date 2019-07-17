const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScheduleSchema = new Schema(
    {
        description: String,
        date: Date,
        user: {
            type: Schema.Types.ObjectId,
            reference: 'User'
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Schedule', ScheduleSchema)
