let mongoose = require("mongoose");
const seeder = require('mongoose-seed')

mongoose.connect("mongodb://localhost/footPrints", {
  useNewUrlParser: true,
  useFindAndModify: false
});

  // Load Mongoose models
  seeder.loadModels([
    'API/models/locations.js',
    'API/models/notes.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['locations', 'notes'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'notes',
        'documents': [
          {
            content: "A riveting tale."
          },
          {
            content: "A very engagin story about nothing."
          },
          {
            content: "Don't read me. I'm a secret."    
          },
          {
            content: "Once upon a time, nothing interesting happened."
          },
          {
            content: "How many notes do I need to write?"
          },  
          {
            content: "Here's another note."
          },  
          {
            content: "This is my best story yet."
          },  
          {
            content: "I got my fish today. He's cute."
          },  
        ]
    },
    {
      'model': 'locations',
      'documents': [
        {
          name: "West Paces Park",
          geometry: {type: "Point", coordinates: [-84.365373, 33.852656]} 
          
        },
        {
          name: "Morgan Falls",
          geometry: {type: "Point", coordinates: [-84.379742, 33.968742]} 
          
        },
        {
          name: "Trail Creek",
          geometry: {type: "Point", coordinates: [-83.357537, 33.971687]}    
        },
        {
          name: "Elizabeth Porter Park And Spray ground",
          geometry: {type: "Point", coordinates: [-84.540687, 33.959884]}
        },
        {
          name: "Brownwood",
          geometry: {type: "Point", coordinates: [-84.346715, 33.737831]}
        },  
      ]
  },
];