"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/reminder/controller");
const validation_1 = __importDefault(require("../middlewares/validation"));
const validator_1 = require("../controllers/reminder/validator");
const reminderRouter = (0, express_1.Router)();
//reminder routes
reminderRouter.get('/', controller_1.getAllReminder);
reminderRouter.post('/:id', (0, validation_1.default)(validator_1.SendReminderValidator), controller_1.sendReminder);
reminderRouter.delete('/:id', controller_1.deleteReminder);
exports.default = reminderRouter;
