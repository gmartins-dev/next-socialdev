import Joi from 'joi';

import joiObjectid from 'joi-objectid';
Joi.objectId = joiObjectid(Joi);

export const createPostSchema = Joi.object({
  text: Joi.string().required().max(256),
});

export const deletePostSchema = Joi.object({
  id: Joi.objectId().required(),
});

export const editPostSchema = Joi.object({
  id: Joi.objectId().required(),
  text: Joi.string().required().max(256),
});
