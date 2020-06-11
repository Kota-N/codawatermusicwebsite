require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Query string logic, preparing for pagination
const getPages = (dataArr, numPerPage) => {
  const pages = [];
  let i = 0;
  while (i < dataArr.length) {
    pages.push(dataArr.slice(i, (i += numPerPage)));
  }
  return pages;
};

//Determine how many items per page here in the second argument of getPage()
const getPageItems = (data, pageNumber) => {
  return getPages(data, 12)[pageNumber - 1];
};

//Database
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

// const test = new Item({
//   _n: 1,
//   title: 'Corporate 1',
//   artist: 'CodaWaterMusic',
//   mp3Url:
//     'https://drive.google.com/uc?export=download&id=1-E8rYj_87Jqa42iGF7C3CI5RiHcUjscB',
//   wavUrl:
//     'https://drive.google.com/uc?export=download&id=19Vi5pDT-4Rw2FrxAS42ldXgHCeEA3PCO',
//   imgUrl:
//     'https://drive.google.com/uc?export=download&id=1d_jVNJ-Xa2VAbukMao_oHYFNO-uQqKVA',
//   genre: 'Corporate',
//   tags: 'motivational, inspirational',
//   description: 'This is a test description',
//   date: new Date(),
// });

// test.save();

//Server
app.get('/music', (req, res) => {
  Item.find((err, items) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      const pageItems = getPageItems(items.reverse(), req.query.page);
      if (pageItems) {
        res.send(pageItems);
      } else {
        res.status(404).send('Not Found');
      }
    }
  });
});
app.get('/music/all', (req, res) => {
  Item.find((err, items) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(items);
    }
  });
});

app.listen(5000, () => {
  console.log('Backend server is running on Port 5000...');
});
