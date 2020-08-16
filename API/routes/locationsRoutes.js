const express = require("express");
const router = express.Router();
const db = require("../models");

//get all locations
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

  //get location by id joined with notes
  router.get("/api/locations/:id", (req, res) => {
    console.log(req.params.id)
    db.Location.findById(req.params.id).populate("notes")
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

  //find locations near client
  router.get("/api/locationsnear", (req, res)=>{
    console.log(req.query)
    let lng = parseFloat(req.query.lng)
    let lat = parseFloat(req.query.lat)
    db.Location.aggregate([
      {
        $geoNear: {
           near: { type: "Point", coordinates: [ lng , lat ] },
           distanceField: "dist.calculated",
           maxDistance: 10000,
           includeLocs: "dist.location",
           spherical: true
        }
      }
   ]).then((location)=>{
      console.log(location)
      res.json({
        error: false,
        data: location,
        message: "All locations retrieved.",
      })
    }).catch((err)=>{
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to find location"
      })
    })
  })

//add note to location by location id
router.put("/api/locations/:id/addnote", (req, res) => {
  console.log(req.params.id)
  db.Location.findByIdAndUpdate(req.params.id, {$push: {notes: req.body.id}}, { new: true })
  .then((updatednote) => {
    res.json({
      error: false,
      data: updatednote,
      message: "Successfully updated note.",
    });
  })
})

// remove note ID from location's array without the note's table being affected
router.put("/api/location/:id/removenote", (req, res) => {
  console.log("*********************id:", req.body.id)
  console.log("user ID:", req.params.id)
  db.Location.findByIdAndUpdate(req.params.id, {$pull: {notes: req.body.id}}, { new: true })
  .then((updatednote) => {
    console.log(updatednote)
    res.json({
      error: false,
      data: updatednote,
      message: "Successfully updated note.",
    });
  }).catch((err)=>{
    console.log(err)
  })
})


//back end use and testing 
router.post("/api/addlocation", (req, res)=>{
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

  module.exports = router;