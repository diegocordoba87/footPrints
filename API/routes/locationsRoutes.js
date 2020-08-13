const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/locations", (req, res) => {
    db.Location.find({})
      .then((foundLocations) => {
        
        res.json({
          error: false,
          data: foundLocations,
          message: "All locations retrieved.",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to retrieve all locations.",
        });
      });
  });

  router.get("/api/locations/:id", (req, res) => {
    console.log(req.params.id)
    db.Location.findById(req.params.id).populate("Notes")
      .then((foundLocations) => {
        
        res.json({
          error: false,
          data: foundLocations,
          message: "All locations retrieved.",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to retrieve all users.",
        });
      });
  })
  
router.post("/api/addlocation", (req, res)=>{
 
//  //req.body is content of note
//   db.Note.create(req.body)
//   .then(function(dbNote) {
//     // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
//     // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//     // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//     return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//   })
//   .then(function(dbArticle) {
//     // If we were able to successfully update an Article, send it back to the client
//     res.json(dbArticle);
//   })
//   .catch(function(err) {
//     // If an error occurred, send it to the client
//     res.json(err);
//   });
 
  db.Article.findOneAndUpdate({ coordinates:  {lat:req.body.lat, lng: req.body.lng}}, { note: dbNote._id }, { new: true });



  db.Location.create(req.body)
  .then((newLocation)=>{
    res.json({
      error: false,
      data: newLocation,
      message: "Successfully added location"
    });
  })
  .catch((err)=>{
    res.status(500).json({
      error: true,
      data: null,
      message: "Unable to add location"
    })
  })


})

router.put("/api/locations/:id/addnote", (req, res) => {
  console.log("hi")
  db.Location.findByIdAndUpdate(req.params.id, {$push: {notes: req.body._id, content: req.body.content}}, { new: true })
  .then((updatednote) => {

    res.json({
      error: false,
      data: updatednote,
      message: "Successfully updated note.",
    });
  })
})

  module.exports = router;