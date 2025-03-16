import Joi from 'joi';

export const createTaskValidator = Joi.object({
    description: Joi.string().required(),
    meetingId: Joi.string().optional(),
    assignedTo: Joi.number().required(),
    status: Joi.string().optional(),
    deadline: Joi.date().required(),
});

export const updateTaskValidator= createTaskValidator;