const mongoose = require('mongoose')
const {Schema, model} = mongoose

const noteSchema = new Schema(
    {
      title: {type:String, required: false},
      note: {type: String, required: true},
      image: {
          type: Schema.Types.ObjectId,
          ref: 'Image'
      }
    },
    {timestamps: true}
)

const Note = model('Note', noteSchema)
module.exports = Note