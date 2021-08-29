const express = require('express');
const router = express.Router(); // eslint-disable-line
const Potlucks = require('./potlucks-model');
const {checkPotluckData} = require('./potlucks-middleware');
const {validatePayload} = require('../auth/authMiddleware');
const {potlucksSchemaNew} = require('../schemas/schemas');

router.get('/', checkPotluckData,
    async (req, res) => {
      res.json(req.body);
    },
);

// TODO: add middleware and tests
router.post('/new',
    validatePayload(potlucksSchemaNew),
    async (req, res, next)=>{
      try {
        const newEvent = req.body;
        if (newEvent) {
          const addedEvent = await Potlucks.add(newEvent);
          res.json({addedEvent});
        } else {
          res.json({message: 'no event to add'});
        }
      } catch (err) {
        next(err);
      }
    });

router.put('', (req, res)=>{
  console.log('wired');
});

router.get('', (req, res)=>{
  console.log('wired');
});

module.exports = router;
