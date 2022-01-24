const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    unique: true
    },
    isSeries: {
        type:Boolean,
        default: false
    },
    type: String,
    img: String,
    imgTitle: String,
    imgSm: String,
    trailer: String,
    video: String,
    year: String,
    limit: Number,
    genre: String
},
{
  timestamps: true
}
);

module.exports = Movie = mongoose.model("movie", movieSchema);
