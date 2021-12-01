module.exports.donate = function(req, res){ 
    return res.render('donate', {
        title: "Donate",
        message: "This is our donation page"
    });
};