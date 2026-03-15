const express=require('express');
const authRouter=express.Router();
const authController=require('../controllers/authController');
const authMiddleware = require('../middleware/auth.middleware');

/** 

*@route POST /api/auth/register
*@description to register a user
*@acess public

*/

authRouter.post('/register',authController.registerUser);


authRouter.post('/login',authController.loginUser);


authRouter.post('/logout',authController.logoutUser);

authRouter.post('/get-me',authMiddleware.authUser,authController.getme);




module.exports=authRouter;
