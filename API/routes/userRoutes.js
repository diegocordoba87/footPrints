const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

router.post("/api/signup", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash)=>{
    if(err){
      return res.status(500).json({
        error: err
      });
    }
    else {
      let user = req.body.username.toLowerCase()
      db.User.create({initials: req.body.initials, username: user , password: hash})
      .then((createdUser) => {
        console.log(createdUser)
        res.json({
          error: false,
          data: {
            _id: createdUser._id,
            initials: createdUser.initials,
            username: createdUser.username
          },
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
  let user = req.body.username.toLowerCase()
  db.User.find({username:user})
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
          error: false,
          data: user[0],
          message: "Authorization successful"
        })
      }
      res.status(401).json({
        message: "Authorization failed"
      })
    })
  })

})

router.get("/api/users/:id", (req, res) => {

  db.User.findById(req.params.id)
    .populate("notes")   
    .then((foundUser) => {
      console.log(foundUser);
      const responseObject = {
        _id: foundUser._id,
        initials: foundUser.initials,
        username: foundUser.username,
        notes: foundUser.notes
      }
      res.json({
        error: false,
        data: responseObject,
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

router.put("/api/user/:id/addnote", (req, res) => {
  console.log("*********************id:", req.body.id)
  console.log("user ID:", req.params.id)
  db.User.findByIdAndUpdate(req.params.id, {$push: {notes: req.body.id}}, { new: true })
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

// remove note ID from user's array without the note's table being affected
router.put("/api/user/:id/removenote", (req, res) => {
  console.log("*********************id:", req.body.id)
  console.log("user ID:", req.params.id)
  db.User.findByIdAndUpdate(req.params.id, {$pull: {notes: req.body.id}}, { new: true })
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