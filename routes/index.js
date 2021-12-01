const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const aboutController = require('../controllers/about_controller');
const contactController = require('../controllers/contact_controller');
const donateController = require('../controllers/donate_controller');


console.log('index router loaded!');

router.get('/', homeController.home);
router.get('/home', homeController.home);
router.get('/contact', contactController.contactUs);
router.get('/about', aboutController.aboutUs);
router.get('/donate', donateController.donate);
router.use('/users', require('./users'));

module.exports = router;