require('express-router-group');

const express = require('express');

const router = express.Router();

const userController = require('../controller/auth');

const userValidationRules = require('../middleware/validator');

router.group('/auth', router => {
    //Sllash
    router.get('/', userController.getSlash);

    //Sign up todos
    router.get('/sign', userController.getSign);

    //Sign up todos => POST
    router.post('/sign', userValidationRules, userController.postSign);

    //Sign up todos
    router.get('/sign-up', userController.getSignUp);

    //Login => GET
    router.get('/login', userController.getLogin);

    //Sign up todos => POST
    router.post('/sign-up', userController.postSignUp);

    //Login => POST
    router.post('/login', userController.postLogin);

    //Activate Account 
    router.get('/email-activate/:token', userController.activateAccount);

    //Forget Passord => GET
    router.get('/forget-password/', userController.getForgetPassword);

    //Forget Passord => POST
    router.post('/forget-password/', userController.forgetPassword);

    //Reset Password => GET
    router.get('/reset-password/:token', userController.getResetPassword);

    //Reset Password
    router.post('/reset-password/:token', userController.resetPassword);
});


module.exports = router;