const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const aboutController = require('../controllers/about_controller');
const contactController = require('../controllers/contact_controller');

console.log('index router loaded!');

router.get('/home', homeController.home);
router.get('/contact', contactController.contactUs);
router.get('/about', aboutController.aboutUs);
router.use('/users', require('./users'));

module.exports = router;