const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema(
    {
      title: {type:String, required: false},
      date: {type: Date, required: true},
      note: {type: String, required: true},
      image: [{
          type: Schema.Types.ObjectId,
          ref: 'Image'
      }]
    },
    {timestamps: true}
)

module.exports = mongoose.model('Note', noteSchema)