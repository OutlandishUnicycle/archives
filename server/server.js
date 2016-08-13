"use strict"
const cron = require('node-cron');
const express =  require('express');
const bp = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const Sequelize = require('sequelize'); 
const routes = require('./config/routes.js');
const app = express();
const task = require('./config/archiver');

app.use(cors());
app.use(morgan('dev'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use('/api', routes);

app.use('/*', (req, res) => {
  res.send('Archivalicious!');
});

let port = process.env.port || 4004;

task.start();

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('listening on port', port);
})