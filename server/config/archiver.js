var Sequelize = require('sequelize'); 
const Archive = require('../listing/archiveModel.js'); //needed for archive tabling
const Listing = require('../listing/listingModel.js'); //needed for archive tabling
// const db1 = require('../config/database1.js'); // needed for main db access
// const db2 = require('../config/database2.js'); //needed for arhcive db access
var cron = require('node-cron');


var Task = cron.schedule('*/9 * * * *', function(){
  console.log('Workers archiving!!');
   Listing.findAll({
      where: {
        status: 2,
      },
      order: [['createdAt', 'DESC']],
    })
    .then((items) => {
      var listings = [];
      if (items.length > 0) {
        for (var i = 0; i < items.length; i ++) {
          var listing = items[i];
          console.log('ITEM ===============>', listing)
          Archive.create({
            title: {type: Sequelize.STRING(30)},
            zipcode: Sequelize.INTEGER,
            takerId: { type: Sequelize.INTEGER, defaultValue: null },
            giverId: { type: Sequelize.INTEGER, defaultValue: null },
            status: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
            picReference: Sequelize.STRING,
            category: Sequelize.STRING,
            description: Sequelize.STRING,
            condition: Sequelize.INTEGER,
            giverRating: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
            takerRating: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
            stateUSA: Sequelize.STRING,
            coordinates: { type: Sequelize.STRING, defaultValue: '0, 0' },
          })
        }
      } else {
        console.log('No status 2 listings available');
      }
    })
    .then(() => {
      Listing.destroy({
        where: {
          status: 2,
        },
      })
    })
    .catch(function(err) {
      return console.log('error archiving.... :(', err)
    })
}, true);


module.exports = Task;