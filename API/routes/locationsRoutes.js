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
    db.Location.findById(req.params.id).populate({
        path:"notes",
        populate:{
            model: "Note"
        }
    })
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
  });

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
    res.status(500).jsin({
      error: true,
      data: null,
      message: "Unable to add location"
    })
  })
})


  module.exports = router;