var Sequelize = require('sequelize'); 
var db1 = require('../config/database1.js');

var Listing = db1.define('Listing', {
  title: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
  status: Sequelize.INTEGER,
  condition: Sequelize.INTEGER,
  category: Sequelize.STRING,
  description: Sequelize.STRING,
  giverId: Sequelize.INTEGER,
  takerId: Sequelize.INTEGER
});

Listing.sync({ force: false });
// Archive.sync({ force: false });
// Listing.sync({ force: false });
module.exports = Listing;