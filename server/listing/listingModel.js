var Sequelize = require('sequelize'); 
var db1 = require('../config/database1.js');

var Listing = db1.define('Listing', {
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

Listing.sync({ force: false });
// Archive.sync({ force: false });
// Listing.sync({ force: false });
module.exports = Listing;