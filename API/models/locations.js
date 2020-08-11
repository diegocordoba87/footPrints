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
    
    notes: [{ 
        type: Schema.Types.ObjectId, ref: 'Notes'
    }]
});

LocationsSchema.index({ location: "2ndsphere"})

const Location = mongoose.model("Location", LocationsSchema)

module.exports = Location;