const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

const LocationsSchema = new Schema({
  name: {
    type: String,
  },
  geometry: GeoSchema,

  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notes",
    },
  ],
});

const Location = mongoose.model("Location", LocationsSchema);
module.exports = Location;
