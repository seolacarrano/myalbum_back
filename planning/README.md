# Project Overview

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Incomplete

## Project Description
This is a note-taking app that a user can add, edit, and delete memo. This project includes a custom API using MongoDB, Mongoose, and Express backend. The API will allow users to add, edit, and delete memo.

## User Stories 
- Users can create a new note
- Users can add pictures to their note 
- Users can edit their note
- Users can delete their note 

## Google Sheet
[Google Sheet](https://docs.google.com/spreadsheets/d/1PyCkPZeIBSzU58bRY3UI4p7iiJOjNmuEtmBo9yVgr8A/edit?usp=sharing) 

## Time/Priority Matrix 
[Backend Matrix](https://docs.google.com/presentation/d/1NXjgKb0sx3a8bXva7Sy3hEhXmCKah-mM6NvYDY1d13w/edit?usp=sharing) 


#### MVP (examples)

- Congifure Server
- Create schema (models)
- Create route handlers (controllers)
- Create routes (routes)
- Test with Postman


#### PostMVP 
- Add extra function to the app 


#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Congifure Server | H | 2hrs | 2hrs | 2hrs|
| Create schema (models) | H | 1.5hrs | 1hr | 1hr| 
| Create route handlers (controllers) | H | 2hrs | 1hr | 1hr|
| Create routes (routes) | H | 2hrs| 1.5hrs | 1.5hrs |
| Test with Postman| H | 1hr | 2.5hrs | 2.5hr|
| Total | H | 9hrs| 8hrs | 8hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Add extra function | L | 3hrs | -hr | -hr|
| Total | H | 3hrs| -hrs | -hrs |

## Additional Libraries
- [jQuery](https://jquery.com/)

## Code Snippet

```
const index = async (req, res) => {
    try{
        const allNotes = await Note.find().populate("image")
        res.status(200).json(allNotes)
    } catch (error) {
        res.status(400).json(error)
    }
}
```
I learned that populate let me reference documents in other collections.

## Issues and Resolutions
**ERROR**: I had an issue on Postman - error: {"code":79,"codeName":"UnknownReplWriteConcern","name":"MongoWriteConcernError","result":{"n":1,"opTime":{"ts":"6856107580809281537","t":5}      
**RESOLUTION**: I took out "&w=majority;'" this part of my mongoURI

## Previous Project Worksheet
 - [portfolio project](https://github.com/seolacarrano/seola_firstproject/blob/master/README.md)