require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const items = require('./routes/api/items');

app.use(express.static(path.join(__dirname, 'build')));

//Database
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Server
app.use('/api/items', items);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}...`);
});
