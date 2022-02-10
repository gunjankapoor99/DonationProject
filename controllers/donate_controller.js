const DonationDetails = require('../models/donationDetails');
const fs = require('fs');
const path = require('path');

module.exports.donate = function(req, res){ 
    return res.render('donate', {
        title: "Donate",
        message: "This is our donation page"
    });
};

module.exports.donationDetails = async  function(req,res){
    console.log(req.body);
    this.nationality = req.body.nationality;
    this.donateItem = req.body.donateItem;
};