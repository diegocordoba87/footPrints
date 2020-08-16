let mongoose = require("mongoose");
// let db = require("../API/models");

const seeder = require("mongoose-seed");

mongoose.connect("mongodb://localhost/footPrints", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// Load Mongoose models
// seeder.loadModels(["API/models/locations.js", "API/models/notes.js"]);
seeder.loadModels(["API/models/notes.js"]);
// Clear specified collections
seeder.clearModels(["notes"], function () {
  // Callback to populate DB once collections have been cleared
  seeder.populateModels(data, function () {
    seeder.disconnect();
  });
});
// Data array containing seed data - documents organized by Model
const data = [
  {
    model: "notes",
    documents: [
      {
        content: "A riveting tale.",
      },
      {
        content: "A very engagin story about nothing.",
      },
      {
        content: "Don't read me. I'm a secret.",
      },
      {
        content: "Once upon a time, nothing interesting happened.",
      },
      {
        content: "How many notes do I need to write?",
      },
      {
        content: "Here's another note.",
      },
      {
        content: "This is my best story yet.",
      },
      {
        content: "I got my fish today. He's cute.",
      },
    ],
  },
  // {
  //   model: "locations",
  //   documents: [
  //     {
  //       name: "West Paces Park",
  //       geometry: { type: "Point", coordinates: [-84.365373, 33.852656] },
  //     },
  //     {
  //       name: "Morgan Falls Overlook Park",
  //       geometry: { type: "Point", coordinates: [-84.379742, 33.968742] },
  //     },
  //     {
  //       name: "Walker Park",
  //       geometry: { type: "Point", coordinates: [-83.357537, 33.971687] },
  //     },
  //     {
  //       name: "Elizabeth Porter Park & Sprayground",
  //       geometry: { type: "Point", coordinates: [-84.540687, 33.959884] },
  //     },
  //     {
  //       name: "Brownwood Park Recreation Center",
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-84.346715, 33.737831],
  //       },
  //     },
  //   ],
  // },
];

// let LocationSeed = [
//   {
//     name: "West Paces Park",
//     geometry: { type: "Point", coordinates: [-84.365373, 33.852656] },
//   },
//   {
//     name: "Morgan Falls Overlook Park",
//     geometry: { type: "Point", coordinates: [-84.379742, 33.968742] },
//   },
//   {
//     name: "Walker Park",
//     geometry: { type: "Point", coordinates: [-83.357537, 33.971687] },
//   },
//   {
//     name: "Elizabeth Porter Park & Sprayground",
//     geometry: { type: "Point", coordinates: [-84.540687, 33.959884] },
//   },
//   {
//     name: "Brownwood Park Recreation Center",
//     geometry: {
//       type: "Point",
//       coordinates: [-84.346715, 33.737831],
//     },
//   },
// ];

// db.Location.deleteMany({})
//   .then(() => db.Location.collection.insertMany(LocationSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

  // db.Location.deleteMany({})
  // .then(() => db.Location.collection.insertMany(LocationSeed))
  // .then((data) => {
  //   console.log(data.result.n + " records inserted!");
  //   process.exit(0);
  // })
  // .catch((err) => {
  //   console.error(err);
  //   process.exit(1);
  // });
