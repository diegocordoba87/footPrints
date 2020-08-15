let mongoose = require("mongoose");
let db = require("../API/models");

mongoose.connect("mongodb://localhost/footPrints", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let LocationSeed = [
  
  {
    name: "West Paces Park",
    geometry: {type: "Point", coordinates: [-84.365373, 33.852656]} 
    
  },
  {
    name: "Morgan Falls Overlook Park",
    geometry: {type: "Point", coordinates: [-84.379742, 33.968742]} 
    
  },
  {
    name: "Walker Park",
    geometry: {type: "Point", coordinates: [-83.357537, 33.971687]}    
  },
  {
    name: "Elizabeth Porter Park & Sprayground",
    geometry: {type: "Point", coordinates: [-84.540687, 33.959884]}
  },
  {
    name: "Brownwood Park Recreation Center",
    geometry: {
      type: "Point",
      coordinates: [-84.346715, 33.737831]
    }
  },  
];

db.Location.deleteMany({})
  .then(() => db.Location.collection.insertMany(LocationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
