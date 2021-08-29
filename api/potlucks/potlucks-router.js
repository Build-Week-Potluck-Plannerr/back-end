const express = require('express');
const router = express.Router();
const Potlucks = require('./potlucks-model');

router.get('/',
    async (req, res) => {
      const potlucks = await Potlucks.find();
      if (!potlucks) {
        res.json(404).json({message: ' no events '});
      } else {
        res.json(potlucks);
      }
    },
);

module.exports = router;
