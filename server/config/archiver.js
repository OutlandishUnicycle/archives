var Sequelize = require('sequelize'); 
const Archive = require('../listing/archiveModel.js'); //needed for archive tabling
const Listing = require('../listing/listingModel.js'); //needed for archive tabling
// const db1 = require('../config/database1.js'); // needed for main db access
// const db2 = require('../config/database2.js'); //needed for arhcive db access
var cron = require('node-cron');


var Task = cron.schedule('* * */1 * *', function(){
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