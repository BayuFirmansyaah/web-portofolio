const express = require('express');
const router = express.Router();

// controller
const home = require('../controller/home')

router.get('/', home.index)
router.get('/about', home.about)
router.get('/pricing', home.pricing)


module.exports = router;