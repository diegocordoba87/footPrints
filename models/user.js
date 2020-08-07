const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"] 
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
      },
    notes:{
        type: Array
    },
    locations:{
        type: Array
    }
});

const User = mongoose.model("User", UserSchema)

module.exports = User;