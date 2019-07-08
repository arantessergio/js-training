const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema(
    {
        description: String,
        done: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Todo', TodoSchema)
