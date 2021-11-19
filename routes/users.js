const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user_controller');
console.log('User router loaded!');

router.get('/profile/:id', usersController.profile);
router.post('/update/:id', usersController.update);

router.get('/createUser', usersController.createUser);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);


module.exports = router;