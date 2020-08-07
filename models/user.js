const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        type: Schema.Types.ObjectId, ref: "Notes"
    },
    locations:{
        type: Schema.Types.ObjectId, ref: "Locations"
    }
});

const User = mongoose.model("User", userSchema)

module.exports = User;