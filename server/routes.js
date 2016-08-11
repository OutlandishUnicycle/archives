const router = require('express').Router();
// const _h = require('./helpers');
// router.use((req, res, next) => {
//   console.log('time:', Date.now());
//   next();
// });

router.get('/', (req, res) => {
  res.send('Archiving Welcome');
});

router.get('/evan', (req, res) => {
  res.send('You filthy swine! How DARE you use unauthorized access routes!! Sod off!')
})
router.post('/evan', (req, res) => {
  res.send('BLARRGHHHH! You filthy swine! How DARE you use unauthorized access routes!! Sod off!')
})

// will return the archived listings associated with specific userId
router.get('/getArchives', (req, res) => {
  let userId = req.body.userId;
    Listing.findAll({
      where: {
        userId: userId,
      },
      order: [['createdAt', 'DESC']],
    })
    .then((items) => {
      res.send(items);
    });
});

// will post new listings to archives
router.post('/postArchives', (req, res) => {
  let listings = req.body.listings;
  for (listing in listings) {
    Listing.create(listing)
  }
  // .then(() => {
    res.send('listings posted');
  // })
});

module.exports = router;






























