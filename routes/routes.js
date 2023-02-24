const express = require('express');
const Model = require('../model/model')

const router = express.Router()


//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
  try{
    console.log(req.params.id)
      const data = await Model.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

//IMDB API requests
router.get('/imdb/trending', async (req, res) => {
  try {
    const response = await fetch(`https://imdb-api.com/en/API/InTheaters/${process.env.IMDB_KEY}`)
    const result = await response.json()
    res.json(result)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
})

router.get('/imdb/byLocation/:location', async (req, res) => {
  const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.IMDB_KEY}?has=locations&locations=${req.params.location}`)
  const result = await response.json()
  res.json(result)
})

module.exports = router;