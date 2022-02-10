const DonationDetails = require('../models/donationDetails');
const fs = require('fs');
const path = require('path');

module.exports.donate = function(req, res){ 
    return res.render('donate', {
        title: "Donate",
        message: "This is our donation page"
    });
};

module.exports.proceed = function(req, res){ 
    return res.render('proceed', {
        title: "Donate Proceed",
    });
};

module.exports.donationDetails = async function(req,res){
    
        try{
            DonationDetails.create(req.body, function(err, donationDetail){
                donationDetail.optradio = req.body.optradio;
                donationDetail.type = req.body.type;

                
                donationDetail.save();

                return res.redirect('back');
        
            })
    }catch(err){
            console.log('error', err);
            return res.redirect('back');
        }
   
    console.log(req.body);
    // console.log(req.body.optradio);
    // console.log(req.body.type);
};