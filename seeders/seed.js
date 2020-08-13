let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost:3001/footPrints", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let LocationSeed = [
  
  {
    name: "West Paces Park",
    geometry: {
      type: "Point",
      coordinates: [33.852656, -84.365373]
    }
  },
  {
    name: "Morgan Falls",
    geometry: {
      type: "Point",
      coordinates: [33.968742, -84.379742]
    } 
    
  },
  {
    name: "Trail Creek",
    geometry: {
      type: "Point",
      coordinates: [33.971687, -83.357537]
    }    
  },
  {
    name: "Elizabeth Porter Park And Spray ground",
    geometry: {
      type: "Point",
      coordinates: [33.959884, -84.540687]
    }
  },
  {
    name: "Brownwood",
    geometry: {
      type: "Point",
      coordinates: [33.737831, -84.346715]
    }
  },  
];

db.Location.deleteMany({})
  .then(() => db.Workout.collection.insertMany(LocationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
