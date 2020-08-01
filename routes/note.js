const express = require('express')
const NoteRouter = express.Router()
const {index, create, update, destroy} = require('../controllers/note.js')

//get all notes
NoteRouter.get('/', index);

//create a new note
NoteRouter.post('/', create);

//update a note
NoteRouter.put('/:id', update);

//delete a note
NoteRouter.delete('/:id', destroy);

module.exports = NoteRouter