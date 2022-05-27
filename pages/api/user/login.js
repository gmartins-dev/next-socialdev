import connect from 'next-connect';
import Joi from 'joi';
import validate from '../../../lib/middlewares/validation';
import { login } from '../../../modules/user/user.service';
import createHandler from '../../../lib/middlewares/nextConnect';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironConfig } from '../../../lib/middlewares/ironSession';

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required(),
});

const handler = createHandler();

handler.post(
  validate({ body: loginSchema }),
  async (req, res) => {
    try {
      const user = await login(req.body);
      req.session.user = {
        id: user._id,
        user: user.user,
      };
      await req.session.save();
      res.send({ ok: true });
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
);

export default withIronSessionApiRoute(handler, ironConfig);
