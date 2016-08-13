var Archive = require('../listing/archiveModel.js');
var Sequelize = require('sequelize'); 
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Archiving Welcome');
});

// will return the archived listings associated with specific userId
router.put('/getArchives', (req, res) => {
  console.log('into getArchives')
  let userId = req.body.userId;
  console.log("jordan's userId is: ",userId)
    Archive.findAll({
      where: {
        $or: [{takerId: userId}, {giverId: userId}]
      },
      order: [['createdAt', 'DESC']],
    })
    .then((items) => {
      console.log('items are being returned from getArchives')
      res.send(items);
    });
});

// will post new listings to archives
router.post('/postArchives', (req, res) => {
  var listing = req.body;
    // Archive.create({
    //   title: listing.title,
    //   zipcode: listing.zipcode,
    //   status: listing.status,
    //   condition: listing.condition,
    //   category: listing.category,
    //   description: listing.description,
    //   giverId: listing.giverId,
    //   takerId: listing.takerId
    // })
    Archive.create(req.body)
    .then(() => {
      res.status(200).send('archivings happened!');
    })
    .catch(function(err) {
      return console.log('error in loggin!', err)
    })
});

module.exports = router;






























