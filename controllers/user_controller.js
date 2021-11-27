const User = require('../models/user');
const fs = require('fs');
const path = require('path');

module.exports.profile = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('user_profile', {
            title: 'User Profile',
            profile_user: user
        });
    }); 
};

module.exports.createUser = function(req, res){
    return res.render('users', {
        title: "Users",
    });
};

module.exports.signIn = function(req, res){
    // if(req.isAuthenticated()){
    //     return res.redirect('/users/profile');
    // }

    return res.render('user_sign_in', {
        title: "SignIn"
    });
};

module.exports.signUp = function(req, res){
    // if(req.isAuthenticated()){
    //     return res.redirect('/users/profile');
    // }

    return res.render('user_sign_up', {
        title: "SignUp"
    });
};

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('Error in signing up');
            return;
        }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('Error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });

};

module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}