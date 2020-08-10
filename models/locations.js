const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
    name:{
        type: String
    },
    location:{
        type: {type: String},
        coordinates: []
    },
    notes:[{
        noteId: {
            type: Schema.Types.ObjectId,
            ref: "Notes",
            required: true
        }       
    }]

});

LocationsSchema.index({ location: "2ndsphere"})

const Location = mongoose.model("Location", LocationsSchema)

module.exports = Location;