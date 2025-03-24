"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMeetingValidator = exports.addMeetingValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addMeetingValidator = joi_1.default.object({
    developmentGroupId: joi_1.default.string().min(5).required(),
    startTime: joi_1.default.date().required(),
    endTime: joi_1.default.date().required(),
    description: joi_1.default.string().min(10).required(),
    meetingRoom: joi_1.default.string().min(10).required(),
});
exports.updateMeetingValidator = exports.addMeetingValidator;
// export const sendReminderValidator = Joi.object({
//     name: Joi.string().min(5).required()
// });
