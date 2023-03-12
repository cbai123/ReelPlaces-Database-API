const express = require('express');
const router = express.Router()

const ImdbController = require('../controllers/imdbAPI')

//IMDB API requests
router.get('/trending', ImdbController.Trending)

router.get('/byLocation/:location', ImdbController.Location)

module.exports = router