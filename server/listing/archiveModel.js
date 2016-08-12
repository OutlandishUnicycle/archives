var Sequelize = require('sequelize'); 
var db = require('../config/database2.js');

var Archive = db.define('Archive', {
  title: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
  status: Sequelize.INTEGER,
  condition: Sequelize.INTEGER,
  category: Sequelize.STRING,
  description: Sequelize.STRING,
  giverId: Sequelize.INTEGER,
  takerId: Sequelize.INTEGER
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