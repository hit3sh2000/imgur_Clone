const mongoose = require("mongoose");   // importing mongoose module

// user schema
var imageSchema =  mongoose.Schema({      // defining structure of database
    image: {
        type: String,
    }
});

    mongoose.model('images',imageSchema);  // defines collection name where we will insert this all data

 // exporting the model
 module.exports = mongoose.model('images');