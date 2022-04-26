const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const aboutController = require('../controllers/about_controller');
const contactController = require('../controllers/contact_controller');
const donateController = require('../controllers/donate_controller');
const volunteerController = require('../controllers/volunteer_controller');
const brandPartnersController = require('../controllers/brandPartners_controller');
const donateProceedController = require('../controllers/donateProceed_controller');
const faqController = require('../controllers/faq_controller');
const termsController = require('../controllers/terms_controller');
const fundRaiserController = require('../controllers/fundRaiser_controller');
const freeFundRaiserController = require('../controllers/freeFundRaiser_controller');
const privacyPolicyController = require('../controllers/privacyPolicy_controller');
const raisecontroller = require('../controllers/raise_controller');
const ngoPartnersController = require('../controllers/ngoPartners_controller');

const db = require('../config/mongoose');
const Users = require('../models/user');
const Faqs = require('../models/faqs');
const { donateProceed } = require('../controllers/donateProceed_controller');


console.log('index router loaded!');

router.get('/', homeController.home);
router.get('/home', homeController.home);
router.get('/contact', contactController.contactUs);
router.get('/about', aboutController.aboutUs);
router.get('/faq', faqController.faq);
router.get('/termsOfServices', termsController.terms);
router.get('/privacyPolicy', privacyPolicyController.privacyPolicy);
router.get('/donate', donateController.donate);
router.get('/fundRaiser', fundRaiserController.fundRaiser);
router.get('/freeFundRaiser', freeFundRaiserController.freeFundRaiser);
router.get('/volunteer', volunteerController.volunteer);
router.get('/donateProceed', donateProceedController.donateProceed);
router.get('/brandPartners', brandPartnersController.brandPartners);
router.get('/ngoPartners', ngoPartnersController.ngoPartners);
router.use('/users', require('./users'));
router.use('/donate', require('./donate'));
router.get('/freefundraiser', raisecontroller.funds);

module.exports = router;