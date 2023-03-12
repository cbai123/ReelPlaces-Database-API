const Model = require('../model/model')

const ImdbController = {
  Trending: async (req, res) => {
    try {
      const response = await fetch(`https://imdb-api.com/en/API/InTheaters/${process.env.IMDB_KEY}`)
      const result = await response.json()
      res.json(result)
    }
    catch(error) {
      res.status(500).json({message: error.message})
    }
  },

  Location: async (req, res) => {
    const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.IMDB_KEY}?has=locations&locations=${req.params.location}`)
    const result = await response.json()
    res.json(result)
  }
}

module.exports = ImdbController