"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskValidator = exports.createTaskValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createTaskValidator = joi_1.default.object({
    description: joi_1.default.string().min(5).required(),
    meetingId: joi_1.default.string().optional(),
    assignedTo: joi_1.default.string().required(),
    status: joi_1.default.string().optional(),
    deadline: joi_1.default.date().required(),
});
exports.updateTaskValidator = exports.createTaskValidator;
