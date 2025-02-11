import Joi from 'joi';
import { follow } from './controller';

export const followValidator = Joi.object({
    id: Joi.string().uuid().required()
})

export const  unFollowValidator = followValidator;