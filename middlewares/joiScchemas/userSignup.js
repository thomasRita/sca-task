import joi from 'joi';

const email = joi.string().trim().strict().email()
  .min(8)
  .max(60)
  .required();

const password = joi.string().trim().regex(/^[a-zA-Z 0-9@.+-@#$&]+$/)
  .min(6)
  .max(40)
  .required();
const firstname = joi.string().trim().strict().min(1)
  .max(50)
  .required();
const lastname = joi.string().trim().strict().min(1)
  .max(50)
  .required();

const userSignupSchema = {
  email,
  password,
  firstname,
  lastname
};

export default userSignupSchema;
