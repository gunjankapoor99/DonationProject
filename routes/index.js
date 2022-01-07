const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const aboutController = require('../controllers/about_controller');
const contactController = require('../controllers/contact_controller');
const donateController = require('../controllers/donate_controller');
const volunteerController = require('../controllers/volunteer_controller');
const faqController = require('../controllers/faq_controller');

const db = require('../config/mongoose');
const Users = require('../models/user');
const Faqs = require('../models/faqs');


console.log('index router loaded!');

router.get('/', homeController.home);
router.get('/home', homeController.home);
router.get('/contact', contactController.contactUs);
router.get('/about', aboutController.aboutUs);
router.get('/faq', faqController.faq);
router.get('/donate', donateController.donate);
router.get('/volunteer', volunteerController.volunteer);
router.use('/users', require('./users'));

module.exports = router;