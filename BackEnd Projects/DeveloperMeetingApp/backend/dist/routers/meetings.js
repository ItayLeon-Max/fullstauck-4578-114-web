"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/meeting/controller");
const validation_1 = __importDefault(require("../middlewares/validation"));
const validator_1 = require("../controllers/meeting/validator");
const meetingRouter = (0, express_1.Router)();
//meeting routes
meetingRouter.get('/', controller_1.getAllMeetings);
meetingRouter.post('/', (0, validation_1.default)(validator_1.addMeetingValidator), controller_1.addMeeting);
meetingRouter.get('/:developmentGroupId', controller_1.getAllMeetingPerDevelopmentGroupID);
meetingRouter.delete('/:id', controller_1.deleteMeeting);
meetingRouter.put('/:id', (0, validation_1.default)(validator_1.updateMeetingValidator), controller_1.updateMeeting);
exports.default = meetingRouter;
