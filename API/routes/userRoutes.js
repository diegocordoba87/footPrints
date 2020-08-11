const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


router.post("/api/signup", (req, res) => {
  db.User.create(req.body)
    .then((createdUser) => {
      res.json({
        error: false,
        data: createdUser,
        message: "Successfully created account.",
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

router.post("/api/signin", (req, res)=>{
  userModel.findOne({username:req.body.username}, function(err, userInfo){
    if (err) {
     next(err);
    } else {
if(req.body.password, userInfo.password) {
const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
}else{
res.json({status:"error", message: "Invalid email/password!!!", data:null});
}
    }
   });

})

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


router.get("/api/users/:id", (req, res) => {
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


router.put("/api/users/:id/addfoundnote", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, {$push: {foundNotes: {_id: req.body._id}}}, { new: true })
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