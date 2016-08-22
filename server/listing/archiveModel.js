var Sequelize = require('sequelize'); 
var db2 = require('../config/database2.js');

var Archive = db2.define('Archive', {
  title: {type: Sequelize.STRING(30)},
  zipcode: Sequelize.INTEGER,
  takerId: { type: Sequelize.INTEGER, defaultValue: null },
  giverId: { type: Sequelize.INTEGER, defaultValue: null },
  status: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
  picReference: Sequelize.STRING,
  category: Sequelize.STRING,
  description: Sequelize.STRING,
  condition: Sequelize.INTEGER,
  giverRating: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
  takerRating: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
  stateUSA: Sequelize.STRING,
  coordinates: { type: Sequelize.STRING, defaultValue: '0, 0' },
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