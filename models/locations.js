const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
    name:{
        type: String
    },
    location:{
        type: "Point",
        coordinates: []
    },
    notes:{
        type: Array
    }

});

LocationsSchema.index({ location: "2ndsphere"})

const Location = mongoose.model("Location", LocationsSchema)

module.exports = Location;