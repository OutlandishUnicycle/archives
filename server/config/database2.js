var Sequelize = require('sequelize');
const secrets2 = require('../../secrets2.js');


var db2 = new Sequelize('discollectarchive', 'lundgren', secrets2.dbpassword, {
  host: secrets2.mysql.host,
  port: secrets2.mysql.port,
});

db2
  .authenticate()
  .then(function(err) {
  })
  .catch(function (err) {
    console.log('Unable to connect to the archive database, sadly:', err);
  });


  module.exports = db2;
