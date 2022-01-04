module.exports.faq = function(req, res){ 
    return res.render('faq', {
        title: "FAQs",
        message: "This is our faqs page"
    });
};