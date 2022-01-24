const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    unique: true
    },
    type: String,
    content: Array,
    genre: String
},
{
  timestamps: true
}
);

module.exports = List = mongoose.model("list", listSchema);