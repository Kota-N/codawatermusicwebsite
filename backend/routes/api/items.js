const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

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

//Preparing for api-side pagination
const getPages = (dataArr, numPerPage) => {
  const pages = [];
  let i = 0;
  while (i < dataArr.length) {
    pages.push(dataArr.slice(i, (i += numPerPage)));
  }
  return pages;
};

//The second argument of getPage() = number of items per page
const getPageItems = (data, pageNumber) => {
  return getPages(data, 12)[pageNumber - 1];
};

// API route    "/api/items"
router.get('/music', (req, res) => {
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
router.get('/music/all', (req, res) => {
  Item.find((err, items) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(items);
    }
  });
});

module.exports = router;
