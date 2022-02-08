module.exports.funds = function(req, res){ 
    return res.render('freefundraiser', {
        title: "freefundraiser",
        message: "This is our faqs page",
    });
};