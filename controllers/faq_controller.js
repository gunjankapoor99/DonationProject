const db = require('../config/mongoose');
// const Faqs = require('../models/faqs');

const Faqs = require("../faqs.json");

module.exports.search = function(req, res){
    
}

module.exports.faq = function(req, res){ 
    return res.render('faq', {
        title: "FAQs",
        message: "This is our faqs page",
        faqs_list: Faqs
    });
};