import connect from 'next-connect';

import mongooseMiddleware from './mongoose';

//responsavel por criar a do next-connect conexao com o bd
export default function createHandler() {
  return connect().use(mongooseMiddleware);
}
