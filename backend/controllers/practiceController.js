const Practice = require('../models/practiceSchema')
const mongoose = require('mongoose')

// GET all practice
const getAllPractice = async (req, res) => {
    const allPractice = await Practice.find({}).sort({createdAt: -1})

    res.status(200).json(allPractice)
}

// GET a single practice
const getOnePractice = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such practice session :("})
}

const allPractices = await Practice.findById(id)

if (!allPractices) {
    return res.status(404).json({ error: "No such practice found"})
}
res.status(200).json(allPractices)
}

// POST a new practice
const createPractice = async (req, res) => {
    const { title, reps, aim, bars, bpm, notes } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (!aim) {
        emptyFields.push('aim')
    }
    if (!bars) {
        emptyFields.push('bars')
    }
    if (!bpm) {
        emptyFields.push('bpm')
    }
    if (!notes) {
        emptyFields.push('notes')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all fields", emptyFields})
    }

    // add to the DB
    try {
        const practice = await Practice.create({ title, reps, aim, bars, bpm, notes })
        res.status(200).json(practice)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// UPDATE a single practice
const updatePractice = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such practice exists :("})
    }

    const practice = await Practice.findOneAndUpdate({ _id: id}, {
        ...req.body
    })

    if (!practice) {
        return res.status(400).json({error: "No such practice exists :("})
    }

    res.status(200).json(practice)
}

// DELETE a single practice
const deletePractice = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such practice exists :("})
    }

    const practice = await Practice.findOneAndDelete({ _id: id})

    if (!practice) {
        return res.status(400).json({error: "No such practice exists :("})
    }

    res.status(200).json(practice)
}

module.exports = {
    getAllPractice, getOnePractice, createPractice, updatePractice, deletePractice,
}