import { withIronSessionApiRoute } from 'iron-session/next';
import { ironConfig } from '../../../lib/middlewares/ironSession';
import createHandler from '../../../lib/middlewares/nextConnect';

const logout = createHandler();

logout.post(async (req, res) => {
  req.session.destroy();
  res.send({ ok: true });
});

export default withIronSessionApiRoute(logout, ironConfig);
