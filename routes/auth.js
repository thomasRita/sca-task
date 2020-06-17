import { Router } from 'express';
import UsersController from '../controllers/users';
import userSignupValidator from '../middlewares/userSignupValidator'


const authRouter = Router();

authRouter.post('/signup',  userSignupValidator, UsersController.userSignup);

export default authRouter;


