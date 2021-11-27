module.exports.aboutUs = function(req, res){ 
    return res.render('about', {
        title: "About",
        message: "This is our first team project"
    });
};