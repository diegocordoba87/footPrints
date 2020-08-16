const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/newnote", (req, res) => {
  console.log(req.body)
  db.Notes.create(req.body)
    .then((createdNote) => {
      res.json({
        error: false,
        data: createdNote,
        message: "Successfully added new note.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new note.",
      });
    });
});



router.get("/api/notes", (req, res) => {
  db.Notes.find()
    .then((foundNotes) => {
      console.log(foundNotes)
      res.json({
        error: false,
        data: foundNotes,
        message: "All notes retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all notes.",
      });
    });
});

router.get("/api/notes/:id", (req, res) => {
  db.Notes.findById(req.params.id)
    .then((foundnote) => {
      res.json({
        error: false,
        data: foundnote,
        message: "Notes retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve note.",
      });
    });
});


router.put("/api/note/:id", (req, res) => {
  db.Notes.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatednote) => {
      res.json({
        error: false,
        data: updatednote,
        message: "Successfully updated note.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to update note.",
      });
    });
});


router.delete("/api/note/:id", (req, res) => {
  
  console.log(req.params.id)
  db.Notes.findByIdAndRemove(req.params.id)
    .then((deletedNote) => {
      
      res.json({
        error: false,
        data: deletedNote,
        message: "Successfully delete note.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to deleted note.",
      });
    });
});


module.exports = router;

