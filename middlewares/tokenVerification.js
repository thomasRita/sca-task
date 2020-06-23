import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import HttpException from '../utils/HttpException';

dotenv.config();

/**
 * @param  {Object} req - the request object
 * @param  {Object} res - the response object
 * @param  {Function} next - switch to the next route middleware
 * @return {JsonResponse} - the json response
 */
const tokenVerification = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return next(new HttpException('InvalidToken'));
      }
      req.user = decoded;
      next();
    });
  } else {
    return next(new HttpException('MissingToken'));
  }
};

export default tokenVerification;
