const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema(
    {
      url: {type:String, required: false}, //add alt 
      comment: {type: String, required: false}
    },
    {timestamps: false}
)

module.exports = mongoose.model('Image', artistSchema)