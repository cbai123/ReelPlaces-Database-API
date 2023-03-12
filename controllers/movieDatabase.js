const Model = require('../model/model')

const DatabaseController = {
  Index: async (req, res) => {
    try{
      console.log(req.params.id)
        const data = await Model.findById(req.params.id);
        if(data === null) {
          res.status(500).json({message: 'Movie ID is not in database'})
        } else {
          res.status(200).json(data)
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
  }
}

module.exports = DatabaseController