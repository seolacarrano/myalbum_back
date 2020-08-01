const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema(
    {
      url: {type:String, required: false}, //add alt 
      title: {type: String, required: require}
    },
    {timestamps: true}
)

module.exports = mongoose.model('Image', imageSchema)