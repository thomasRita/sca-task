import jwt from 'jsonwebtoken';
import UserModel from '../models/User'
import hashPassword from '../utils/hash'
import ResponseHelper from '../utils/ResponseHelper'

const User = new UserModel();
/**
 * @export
 */
class UsersController {
  /**
   * @param  {Object} req - the request object
   * @param  {Object} res - the response object
   * @return {JsonResponse} - the json response
   */
  static async userSignup(req, res) {
      const {
        email,
        firstname,
        lastname
      } = req.body
      const userExists = await User.getByField('email', email)

      if (userExists) {
          ResponseHelper.error(res, 409, {
              message: 'User already exists'
          })
      } else {
        const expiryTime = 60 * 60

        const newUser = await User.create({
            email,
            password: hashPassword(password),
            firstname,
            lastname,
            isAdmin: false,
        })

        const token = await jwt.sign(
            {
                id: newUser.id,
                email,
                isAdmin: false,
            },
            process.env.JWT_SECRET,
            { expiresIn: expiryTime}
        )
      delete newUser.password;
      const newUserWithToken = Object.assign(newUser, {
        token
      });
      ResponseHelper.success(res, 201, newUserWithToken);
    }
  }
}

export default UsersController