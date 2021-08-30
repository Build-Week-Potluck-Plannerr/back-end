const express = require('express');
const router = express.Router(); // eslint-disable-line
const Potlucks = require('./potlucks-model');
const {checkPotluckData, checkPotluckId} = require('./potlucks-middleware');
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

router.put('/update/:id', checkPotluckId, async (req, res)=>{
  try {
    const eventInfo = await Potlucks.updateById(req.params.id, req.body);
    res.json(eventInfo);
  } catch (err) {
    res.status(500).json({
      mesage: 'information for this potluck could not be found',
    });
  }
});

router.delete('/delete/:id', checkPotluckId,
    async (req, res)=>{
      try {
        const deleted = await Potlucks.deleteById(req.params.id);
        res.json({deleted, message: 'potluck event deleted'});
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;
