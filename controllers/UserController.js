const express = require('express');
const router = express.Router();
const db = require('../models');

// Current Path /User

// Index Route
router.get('/', (req,res) => {
  res.render('index');
})


module.exports = router;