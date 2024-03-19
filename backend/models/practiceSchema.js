const mongoose = require('mongoose')

const Schema = mongoose.Schema

// contents of the model
const practiceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    aim: {
        type: String,
        required: true,
    },
    bars: {
        type: Number,
        required: false,
    },
    bpm: {
        type: Number,
        required: false,
    },
    notes: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model('Practice', practiceSchema)