import connect from 'next-connect';
import Joi from 'joi';
import validate from '../../../lib/middlewares/validation';
import { signupUser } from '../../../modules/user/user.service';
import createHandler from '../../../lib/middlewares/nextConnect';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironConfig } from '../../../lib/middlewares/ironSession';
import { signupUser } from '../../../modules/user/user.service';
import { signupSchema } from '../../../modules/user/user.schema';

//validação de dados para cadastro
const signup = createHandler();

signup.post(
  validate({ body: signupSchema }),
  async (req, res) => {
    try {
      const user = await signupUser(req.body);
      req.session.user = {
        id: user._id,
        user: user.user,
      };
      await req.session.save();
      res.status(201).json({ ok: true });
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).send({
          code: 11000,
          duplicatedKey: Object.keys(err.keyPattern)[0],
        });
      }
      console.error(err);
      throw err;
    }
  },
);

export default withIronSessionApiRoute(signup, ironConfig);
