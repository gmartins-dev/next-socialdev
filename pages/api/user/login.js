import connect from 'next-connect';
import Joi from 'joi';
import validate from '../../../lib/middlewares/validation';
import { login } from '../../../modules/user/user.service';
import createHandler from '../../../lib/middlewares/nextConnect';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironConfig } from '../../../lib/middlewares/ironSession';
import { loginSchema } from '../../../modules/user/user.schema';

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
      return res.status(400).send(err.message);
    }
  },
);

export default withIronSessionApiRoute(handler, ironConfig);
