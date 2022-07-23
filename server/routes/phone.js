'use strict';

const express = require('express');
const router = express.Router();
//const phones = require('./../phones.json');
const Phones = require('./../models/phone');

router.get('/', (req, res, next) => {
  Phones.find()
    .then((phones) => res.json({ phones }))
    .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.json({ data: phones[id] });
});

module.exports = router;
