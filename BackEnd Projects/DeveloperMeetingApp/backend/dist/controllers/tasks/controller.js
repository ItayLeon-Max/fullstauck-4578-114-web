"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = getAllTasks;
exports.getTaskById = getTaskById;
exports.getTasksByUser = getTasksByUser;
exports.addTask = addTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.sendTask = sendTask;
const task_1 = __importDefault(require("../../models/task"));
const app_error_1 = __importDefault(require("../../errors/app-error"));
const http_status_codes_1 = require("http-status-codes");
const Meeting_1 = __importDefault(require("../../models/Meeting"));
const user_1 = __importDefault(require("../../models/user"));
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("config"));
const reminder_1 = __importDefault(require("../../models/reminder"));
async function getAllTasks(req, res, next) {
    try {
        const tasks = await task_1.default.findAll({ include: [user_1.default, Meeting_1.default] });
        res.json(tasks);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
async function getTaskById(req, res, next) {
    try {
        const task = await task_1.default.findByPk(req.params.id, { include: [user_1.default, Meeting_1.default] });
        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }
        else {
            res.json(task);
        }
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
async function getTasksByUser(req, res, next) {
    try {
        const tasks = await task_1.default.findAll({
            where: { assignedTo: req.params.userId }
        });
        res.json(tasks);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
async function addTask(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not provided'));
        }
        const token = authHeader.split(' ')[1];
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwtSecret'));
        if (decoded.role.toLowerCase() !== 'admin') {
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'Only admins can create tasks.'));
        }
        const { description, meetingId, assignedTo, status, deadline } = req.body;
        const user = await user_1.default.findByPk(assignedTo);
        if (!user)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `User with id ${assignedTo} not found`));
        if (meetingId) {
            const meeting = await Meeting_1.default.findByPk(meetingId);
            if (!meeting)
                return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `Meeting with id ${meetingId} not found`));
        }
        const task = await task_1.default.create({
            description,
            meetingId: meetingId || null,
            assignedTo,
            sentFrom: decoded.id,
            status: status || 'open',
            deadline: new Date(deadline),
        });
        res.status(http_status_codes_1.StatusCodes.CREATED).json(task);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
async function updateTask(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer '))
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not provided'));
        const token = authHeader.split(' ')[1];
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwtSecret'));
        if (decoded.role.toLowerCase() !== 'admin')
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'Only admins can update tasks.'));
        const task = await task_1.default.findByPk(req.params.id);
        if (!task)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `Task with id ${req.params.id} not found`));
        const { description, meetingId, assignedTo, status, deadline } = req.body;
        const user = await user_1.default.findByPk(assignedTo);
        if (!user)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `User with id ${assignedTo} not found`));
        if (meetingId) {
            const meeting = await Meeting_1.default.findByPk(meetingId);
            if (!meeting)
                return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `Meeting with id ${meetingId} not found`));
        }
        task.description = description;
        task.meetingId = meetingId || null;
        task.assignedTo = assignedTo;
        task.status = status || 'open';
        task.deadline = new Date(deadline);
        await task.save();
        res.json(task);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
async function deleteTask(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer '))
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not provided'));
        const token = authHeader.split(' ')[1];
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwtSecret'));
        if (decoded.role.toLowerCase() !== 'admin')
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'Only admins can delete tasks.'));
        const task = await task_1.default.findByPk(req.params.id);
        if (!task)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `Task with id ${req.params.id} not found`));
        await task.destroy();
        res.json({ message: "Task deleted" });
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
async function sendTask(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer '))
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not provided'));
        const token = authHeader.split(' ')[1];
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwtSecret'));
        if (decoded.role.toLowerCase() !== 'admin')
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'Only admins can assign tasks.'));
        const { userId } = req.body;
        const { id } = req.params;
        if (!userId)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "userId is required"));
        const task = await task_1.default.findByPk(id);
        if (!task)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `Task with id ${id} not found`));
        const user = await user_1.default.findByPk(userId);
        if (!user)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `User with id ${userId} not found`));
        task.assignedTo = user.id;
        task.sentFrom = decoded.id;
        await task.save();
        await reminder_1.default.create({
            meetingId: task.meetingId,
            reminderTo: user.email,
        });
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: `Task reminder sent to ${user.name} by ${decoded.id}`,
            task,
        });
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
