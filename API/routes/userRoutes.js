const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/api/signup", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash)=>{
    if(err){
      return res.status(500).json({
        error: err
      });
    }
    else {
      db.User.create({initials: req.body.initials, username: req.body.username, password: hash})
      .then((createdUser) => {
        console.log(createdUser)
        res.json({
          error: false,
          message: "Successfully created account.",
          
        });
      }).catch((err)=>{
        console.log(err)
        res.status(500).json({
          error: true,
          data: null,
          message: "Could not create users"
        })
      })
    }
  })
})

router.post("/api/login", (req, res)=>{
  console.log(req.body)
  db.User.find({username:req.body.username})
  .exec()
  .then(user=>{
    if(user.length < 1){
      return res.status(401).json({
        message: "Authorization failed"
      })
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
      if(err){
        return res.status(401).json({
          message: "Authorizatoon failed"
        })
      }
      if(result){
        return res.status(200).json({
          message: "Authorization successful"
        })
      }
      res.status(401).json({
        message: "Authorization failed"
      })
    })
  })

})

router.get("/api/users/:username", (req, res) => {
  console.log(req.params.username)
  db.User.find({username:req.params.username})   
    .then((foundUser) => {
      console.log(foundUser)
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


router.put("/api/users/:id/addnote", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, {$push: {Notes: {_id: req.body._id}}}, { new: true })
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

router.put("/api/users/:id/writtennotes", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, {$push: {writtenNotes: {_id: req.body._id, content: req.body.content}}}, { new: true })
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



//For testing
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


module.exports = router;