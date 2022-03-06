const express = require('express');
const router = express.Router();
const passport = require('passport');

const donateController = require('../controllers/donate_controller');

router.get('/proceed', donateController.proceed);
router.post('/donationDetails', donateController.donationDetails);

module.exports = router;