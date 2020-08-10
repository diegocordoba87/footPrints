const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"] 
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
      },
    notes:[
        {
            noteId: {
                type: Schema.Types.ObjectId,
                ref: "Notes"
            }
        }
    ],
    locations:[
        {
            locationId:{
                
                    type: Schema.Types.ObjectId,
                    ref: "Location"

        }
    }
    ]
});


const User = mongoose.model("User", UserSchema)

module.exports = User;