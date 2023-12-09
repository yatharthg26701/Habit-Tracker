const express = require('express');
const router = express.Router();
const startPageController = require('../controllers/startPage')

router.get('/', startPageController.home);
router.use('/habits', require('./habits'));


module.exports = router;