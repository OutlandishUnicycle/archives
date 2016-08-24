var Sequelize = require('sequelize'); 
const Archive = require('../listing/archiveModel.js'); //needed for archive tabling
const Listing = require('../listing/listingModel.js'); //needed for archive tabling
// const db1 = require('../config/database1.js'); // needed for main db access
// const db2 = require('../config/database2.js'); //needed for arhcive db access
var cron = require('node-cron');


var Task = cron.schedule('* * * 1 *', function(){
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
            title: listing.id,
            zipcode: listing.zipcode,
            takerId: listing.takerId,
            giverId:listing.giverId,
            status: listing.status,
            picReference: listing.picReference,
            category: listing.category,
            description: listing.description,
            condition: listing.condition,
            giverRating:listing.giverRating,
            takerRating: listing.takerRating,
            stateUSA: listing.stateUSA,
            coordinates: listing.coordinates
          })
        }
      } else {
        console.log('No status 2 listings available');
      }
    })
    .then(() => {
      console.log('into destruction bit');
      // Listing.destroy({
      //   where: {
      //     status: 2,
      //   },
      // })
    })
    .catch(function(err) {
      return console.log('error archiving.... :(', err)
    })
}, true);


module.exports = Task;