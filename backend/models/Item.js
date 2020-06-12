const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  _n: Number,
  title: String,
  artist: String,
  mp3Url: String,
  wavUrl: String,
  imgUrl: String,
  genre: String,
  tags: String,
  description: String,
  date: Date,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
