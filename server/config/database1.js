var Sequelize = require('sequelize');
// const secrets1 = require('../../secrets1.js');


// var db1 = new Sequelize('discollectDB', 'jordan', secrets1.dbpassword, {
//   host: secrets1.mysql.host,
//   port: secrets1.mysql.port,
// });
var db1 = new Sequelize('discollectDB', 'jordan', process.env.db1password, {
  host: process.env.db1host,
  port: process.env.db1port,
});

db1
  .authenticate()
  .then(function(err) {
  })
  .catch(function (err) {
    console.log('Unable to connect to the main database, sadly:', err);
  });


  module.exports = db1;
