const express = require("express");
const router = express.Router();
const db = require("../models");


router.post("/api/user", (req, res) => {
  db.User.create(req.body)
    .then((createdUser) => {
      res.json({
        error: false,
        data: createdUser,
        message: "Successfully added new user.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new user.",
      });
    });
});

router.get("/api/users", (req, res)=>{
  db.User.find({})
  .then((users)=>{
    res.json({
      error: false,
      data: users,
      message: "These are your users"
    })
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json({
      error: true,
      data: null,
      message: "Could not get users"
    })
  })
})


router.get("/api/user/:id", (req, res) => {
  db.User.findById(req.params.id)
   
    .then((foundUser) => {
      res.json({
        error: false,
        data: foundUser,
        message: "User retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve user.",
      });
    });
});


router.put("/api/user/:id", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedUser) => {
      res.json({
        error: false,
        data: updatedUser,
        message: "Successfully updated user.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to update user.",
      });
    });
});

module.exports = router;