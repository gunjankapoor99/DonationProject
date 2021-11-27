const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const contactController = require('../controllers/contact_controller');

console.log('index router loaded!');

router.get('/', homeController.home);
router.get('/contact', contactController.contactUs);
router.use('/users', require('./users'));

module.exports = router;