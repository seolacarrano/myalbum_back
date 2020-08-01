const express = require('express');
const router = express.Router();
const Image = require('../models/image.js');

//route to list all images
const index = async (req, res) => {
    try{
        const allImages = await Image.find()
        res.status(200).json(allImages)
    }
    catch (error) {
        res.status(400).send(error)
    }
};

//route to create a new image
const create = async (req, res) => {
    try{
        const newImage = await Image.create(req.body)
        const allImages = await Image.find()
        res.status(200).json(allImages)
    }
    catch (error) {
        res.status(400).send(error)
    }
};

//route to update an image
const update = async (req, res) => {
    try{
        const updatedImage = await Image.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedImage)
    }
    catch(error) {
        res.status(200).send(error)
    }
};

//route to delete an image
const destroy = async (req, res) => {
    try{
        const deletedImage = await Image.findByIdAndDelete(req.params.id)
        const restImages = await Image.find()
        res.status(200).json(restImages)
    }
    catch (error) {
        res.status(400).send(error)
    }
};

module.exports = {index, create, update, destroy}
