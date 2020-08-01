const mongoose = require('mongoose')
const {Schema, model} = mongoose

const imageSchema = new Schema(
    {
      url: {type:String, required: true}, //add alt 
      title: {type: String, required: true}
    },
    {timestamps: true}
);

const Image = model('Image', imageSchema)
module.exports = Image