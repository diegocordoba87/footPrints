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

  router.get("/api/locationsnear", (req, res)=>{
    let lng = parseFloat(req.query.lng)
    let lat = parseFloat(req.query.lat)
    console.log("lng", req.query.lng)
    console.log("lat", req.query.lat)
    db.Location.aggregate([
      {
        $geoNear: {
           near: { type: "Point", coordinates: [ lng , lat ] },
           distanceField: "dist.calculated",
           maxDistance: 2,
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

router.put("/api/locations/:id/addnote", (req, res) => {
  db.Location.findByIdAndUpdate(req.params.id, {$push: {notes: req.body._id}}, { new: true })
  .then((updatednote) => {

    res.json({
      error: false,
      data: updatednote,
      message: "Successfully updated note.",
    });
  })
})

  module.exports = router;