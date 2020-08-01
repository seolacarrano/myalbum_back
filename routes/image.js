const express = require('express')
const NoteRouter = express.Router()
const {index, create, update, destroy} = require('../controllers/image.js')

//get all images
NoteRouter.get('/', index);

//create a new image
NoteRouter.post('/', create);

//update an image
NoteRouter.put('/:id', update);

//delete an image
NoteRouter.delete('/:id', destroy);

module.exports = NoteRouter