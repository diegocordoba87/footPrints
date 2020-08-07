const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    content: {
        type: String,
        required: true,
        minlength: 250,
        maxlength: 1000
    }
});

const Notes = mongoose.model("Notes", notesSchema)

module.exports = Notes;