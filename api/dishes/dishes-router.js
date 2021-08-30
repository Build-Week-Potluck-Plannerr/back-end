const express = require('express');
const router =  express.Router(); //eslint-disable-line
const {checkDishData, checkDishId} = require('./dishesMiddleware');
const {validatePayload} = require('../auth/authMiddleware');
const {dishesSchema} = require('../schemas/schemas');
const Dishes = require('./dishes-model');

router.get('/', checkDishData,
    async (req, res) => {
      res.json(req.body);
    },
);

// TODO: add middleware and tests
router.post('/new',
    validatePayload(dishesSchema),
    async (req, res, next)=>{
      try {
        const newDish = req.body;
        if (newDish) {
          const addedDish = await Dishes.add(newDish);
          res.json({addedDish});
        } else {
          res.json({message: 'no dish to add'});
        }
      } catch (err) {
        next(err);
      }
    });

router.put('/update/:id', checkDishId, async (req, res)=>{
  try {
    const dishInfo = await Dishes.updateById(req.params.id, req.body);
    res.json(dishInfo);
  } catch (err) {
    res.status(500).json({
      mesage: 'information for this dish could not be found',
    });
  }
});

router.delete('/delete/:id', checkDishId,
    async (req, res)=>{
      try {
        const deleted = await Dishes.deleteById(req.params.id);
        res.json({deleted, message: 'dish deleted'});
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;
