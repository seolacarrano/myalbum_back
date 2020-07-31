const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memoSchema = new Schema(
    {
      url: {type:String, required: false}
    },
    {timestamps: false}
)

module.exports = mongoose.model('Image', artistSchema)