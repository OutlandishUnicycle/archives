var Sequelize = require('sequelize'); 
var db2 = require('../config/database2.js');

var Archive = db2.define('Archive', {
    title: Sequelize.STRING,
    zipcode: Sequelize.INTEGER,
    takerId: Sequelize.INTEGER,
    giverId:Sequelize.INTEGER,
    status: Sequelize.INTEGER,
    picReference: Sequelize.STRING,
    category: Sequelize.STRING,
    description: Sequelize.STRING,
    condition: Sequelize.INTEGER,
    giverRating:Sequelize.INTEGER,
    takerRating: Sequelize.INTEGER,
    stateUSA: Sequelize.STRING,
    coordinates: Sequelize.STRING,
});

Archive.sync({ force: false });

module.exports = Archive;


      // var data1 = {
      //   title: "Evan Sucks Monkeys",
      //   zipcode: 12345,
      //   takerId: 3,
      //   giverId: 9,
      //   status: 2,
      //   category: "Bollocks",
      //   description: "When people talk about Evan, they rarely use the word malevolent, but it is a missed opportunity",
      //   condition: 5,
      // }