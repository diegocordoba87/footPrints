let mongoose = require("mongoose");
let db = require("../API/models");

mongoose.connect("mongodb://localhost/footPrints", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let LocationSeed = [
  
  {
    name: "West Paces Park",
    geometry: {type: "Point", coordinates: [-84.365373, 33.852656]}, 
    url: "https://www.google.com/maps/place/W+Paces+Park+Ct+NW,+Atlanta,+GA+30327/@33.8514345,-84.4280193,17z/data=!3m1!4b1!4m5!3m4!1s0x88f50ff7afd37c2b:0xfc379d1f89d6532b!8m2!3d33.8514345!4d-84.4258306"
  },
  {
    name: "Morgan Falls Overlook Park",
    geometry: {type: "Point", coordinates: [-84.379742, 33.968742]}, 
    url: "https://www.google.com/maps/place/Morgan+Falls+Overlook+Park/@33.9712867,-84.3816623,17z/data=!3m1!4b1!4m5!3m4!1s0x88f50c5c965f2ef1:0xf8692f8836b3115a!8m2!3d33.9712867!4d-84.3794736"
  },
  {
    name: "Walker Park",
    geometry: {type: "Point", coordinates: [-83.357537, 33.971687]},
    url: "https://www.google.com/maps/place/Walker+Park/@33.7467651,-84.3431226,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5014f0beae923:0xe1e72431a5f6dee!8m2!3d33.7467651!4d-84.3409339"    
  },
  {
    name: "Elizabeth Porter Park & Sprayground",
    geometry: {type: "Point", coordinates: [-84.540687, 33.959884]},
    url: "https://www.google.com/maps/place/Elizabeth+Porter+Park+%26+Sprayground/@33.9598124,-84.5433281,17z/data=!4m5!3m4!1s0x88f50717dd91d401:0x2df144e15a610371!8m2!3d33.9598124!4d-84.5411394"
  },
  {
    name: "Brownwood Park Recreation Center",
    geometry: {
      type: "Point",
      coordinates: [-84.346715, 33.737831]
    },
    url: "https://www.google.com/maps/place/Brownwood+Park/@33.7377956,-84.3491825,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5015c720b473b:0xf8d97348ee64572d!8m2!3d33.7377956!4d-84.3469938"
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