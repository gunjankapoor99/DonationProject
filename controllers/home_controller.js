const User = require('../models/user');

module.exports.home = function(req, res){ 
   return res.end('<h1>This is our first team project</h1>');
    return res.render('home', {
        title: "Home"
    });
};