var Sequelize = require('sequelize');
const secrets = require('../../secrets.js');


var db = new Sequelize('discollectarchive', 'lundgren', secrets.dbpassword, {
  host: secrets.mysql.host,
  port: secrets.mysql.port,
});

db
  .authenticate()
  .then(function(err) {
  })
  .catch(function (err) {
    console.log('Unable to connect to the database, sadly:', err);
  });

  module.exports = db;
