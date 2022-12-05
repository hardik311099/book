import { validateRequest } from './helper';
import Joi from 'joi';

export const createAccountSchema = (req, res, next) =>{
  const schema = Joi.object({
  
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  validateRequest(req, next, schema);
};