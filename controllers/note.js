//const express = require('express');
//const router = express.Router();
const Note = require('../models/note.js')
//const Image = require('../models/image.js')

//route to list all notes
const index = async (req, res) => {
    try{
        const allNotes = await Note.find().populate("image")
        res.status(200).json(allNotes)
    } catch (error) {
        res.status(400).json(error)
    }
}

//route to find a note by its title 
const getOne = async (req, res) => {
    try{
    const oneNote = await (await Note.findOne({title: req.params.title})).populate("image")
    res.status(200).json(oneNote)
    }
    catch(error){
        res.status(200).send(error)
    }
};

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

module.exports = {index, getOne, create, update, destroy};