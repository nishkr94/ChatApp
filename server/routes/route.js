/***********************************************************************************
 *  Purpose: Program file to set the routes for different request based on the url.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   20-11-2018
 ***********************************************************************************/

/**
 * Required Dependencies.
 */
const express = require('express'); // Importing express module.
const app = express(); // Creating constructor of express module.
var router = express.Router(); // Creating router using express' router() function.

// Importing the controller module to set the control for each request type.
const controller = require('../controller/userController');

// Importing the middleware module for verification of request data.
const middleware = require('../middleware/userMiddleware');

// Using router.post() function for '/login' request.
router.post('/login', controller.loginController);

// Using router.post() function for '/signup' request.
router.post('/signup', controller.signupController);

// Using router.post() function for '/home' request.
router.post('/home', controller.chatController);

// Exporting the router module.
module.exports = router;