import connect from 'next-connect';
import Joi from 'joi';
import validate from '../../../lib/middlewares/validation';
import { signupUser } from '../../../modules/user/user.services';

//validação de dados para cadastro
const postSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(30),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(50).min(6),
});

const signup = connect().post(
  validate({ body: postSchema }),
  (req, res) => {
    signupUser(req.body);
    res.status(200).json({ teste: 'ok' });
  },
);

export default signup;
