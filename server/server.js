"use strict"

const express =  require('express');
const bp = require('body-parser');
const cors = require('cors');

const routes = require('./routes.js');

const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use('/api', routes);

app.use('/*', (req, res) => {
  console.log('Archiving Magic');
  res.send('Archivalicious!');
});

let port = process.env.PORT || 4004;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('listening on port', port);
})