//const express = require('express');
//const router = express.Router();
const Note = require('../models/note.js')
//const Image = require('../models/image.js')

//route to list all notes
const index = async (req, res) => {
    try{
        const allNotes = await Note.find()
        res.status(200).json(allNotes)
    } catch (error) {
        res.status(400).json(error)
    }
}

/*const index = async (req, res) => {
    try {
      const allNotes = await Note.find({});
      //create a new array of rats with the pizza info
      const notes = allNotes.map(async (rat) => {
        const theImage = await Image.findById(note.image);
        return {
            _id: note._id,
          title: note.title,
          note: note.note,
          image: theImage
        };
      });
      console.log(images);
      const notes2 = await Promise.all(notes);
      await res.status(200).json(notes2);
    } catch (error) {
      res.status(400).send(error);
    }
  };*/

//route to create a new note
const create = async (req, res) => {
    try{
        const newNote = await Note.create(req.body)
        const allNotes = await Note.find()
        res.status(200).json(allNotes)
    }
    catch(error){
        res.status(400).send(error)
    }
};

//update a note
const update = async (req, res) => {
    try{
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updatedNote)
    }
    catch(error){
        res.status(400).send(error)
    }
};

//delete a note
const destroy = async (req, res) => {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        const restNotes = await Note.find()
        res.status(200).json(restNotes)
    }
    catch{
        res.status(400).send(error)
    }
};

module.exports = {index, create, update, destroy};