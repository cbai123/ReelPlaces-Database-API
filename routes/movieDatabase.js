const express = require('express');
const router = express.Router()

const movieDatabase = require('../controllers/movieDatabase')


//Get by ID Method
router.get('/:id', movieDatabase.Index)

module.exports = router