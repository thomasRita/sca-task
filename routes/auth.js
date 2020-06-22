import { Router } from 'express';
import UsersController from '../controllers/users';
import userSignupValidator from '../middlewares/userSignupValidator'
import userSigninValidator from '../middlewares/userSigninValidator'
import tokenVerification from '../middlewares/tokenVerification'
import verifyUser from '../middlewares/verifyUser'
import verifyAdmin from '../middlewares/verifyAdmin'


const authRouter = Router();

authRouter.post('/signup',  userSignupValidator, UsersController.userSignup)
authRouter.post('/signin', userSigninValidator, UsersController.userSignin)
authRouter.post('/admin', tokenVerification, verifyAdmin, UsersController.adminVerify)


export default authRouter;


