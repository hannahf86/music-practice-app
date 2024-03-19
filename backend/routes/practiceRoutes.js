const express = require('express');

// CONTROLLERS
const { 
    getAllPractice, 
    getOnePractice, 
    createPractice, 
    updatePractice, 
    deletePractice 
} = require('../controllers/practiceController');

const router = express.Router();

// GET all practice
router.get('/', getAllPractice);

// GET a single practice
router.get('/:id', getOnePractice);

// POST a new practice
router.post('/', createPractice);

// UPDATE a single practice
router.patch('/:id', updatePractice);

// DELETE a single practice
router.delete('/:id', deletePractice);

module.exports = router;