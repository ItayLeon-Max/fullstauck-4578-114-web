"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllReminder = getAllReminder;
exports.sendReminder = sendReminder;
exports.deleteReminder = deleteReminder;
const reminder_1 = __importDefault(require("../../models/reminder"));
const Meeting_1 = __importDefault(require("../../models/Meeting"));
const app_error_1 = __importDefault(require("../../errors/app-error"));
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("config"));
async function getAllReminder(req, res, next) {
    try {
        const reminders = await reminder_1.default.findAll();
        res.status(200).json(reminders);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
async function sendReminder(req, res, next) {
    try {
        const { id } = req.params;
        const { reminderTo } = req.body;
        // Extract the token from the request headers
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer '))
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not provided'));
        const token = authHeader.split(' ')[1];
        // Verify JWT and decode payload
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwtSecret'));
        if (decoded.role.toLowerCase() !== 'admin')
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'Only admins can send reminders.'));
        const meeting = await Meeting_1.default.findByPk(id);
        if (!meeting)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `Meeting with id ${id} not found`));
        await reminder_1.default.create({ meetingId: id, reminderTo });
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: `Reminder sent for meeting with id ${id} to ${reminderTo}`,
            meeting,
        });
        console.log(`Reminder sent for meeting with id: ${id} to ${reminderTo}`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
async function deleteReminder(req, res, next) {
    try {
        const { id } = req.params;
        const reminder = await reminder_1.default.findByPk(id);
        if (!reminder) {
            res.status(404).json({ message: `reminder with id ${id} not found` });
            return;
        }
        await reminder.destroy();
        res.status(200).json({ message: `reminder with id ${id} deleted` });
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
