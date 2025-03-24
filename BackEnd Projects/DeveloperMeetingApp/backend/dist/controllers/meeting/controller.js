"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMeetings = getAllMeetings;
exports.getAllMeetingPerDevelopmentGroupID = getAllMeetingPerDevelopmentGroupID;
exports.addMeeting = addMeeting;
exports.deleteMeeting = deleteMeeting;
exports.updateMeeting = updateMeeting;
const Meeting_1 = __importDefault(require("../../models/Meeting"));
const app_error_1 = __importDefault(require("../../errors/app-error"));
const http_status_codes_1 = require("http-status-codes");
//get all meetings functions
async function getAllMeetings(req, res, next) {
    try {
        const meetings = await Meeting_1.default.findAll();
        res.status(200).json(meetings);
        console.log(`Meetings: ${meetings.length}`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
// getAllMeetingPerdevelopmentGroup functions
async function getAllMeetingPerDevelopmentGroupID(req, res, next) {
    try {
        const { developmentGroupId } = req.params;
        const meetings = await Meeting_1.default.findAll({ where: { developmentGroupId } });
        res.status(200).json(meetings);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
// addMeeting functions
async function addMeeting(req, res, next) {
    const { developmentGroupId, startTime, endTime, description, meetingRoom } = req.body;
    try {
        const meeting = await Meeting_1.default.create({
            developmentGroupId,
            startTime,
            endTime,
            description,
            meetingRoom
        });
        res.status(201).json(meeting);
        console.log(`created new meeting with id: ${meeting.id}`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
// deleteMeeting functions
async function deleteMeeting(req, res, next) {
    try {
        const { id } = req.params;
        const meeting = await Meeting_1.default.findByPk(id);
        if (!meeting) {
            res.status(404).json({ message: `meeting with id ${id} not found` });
            return;
        }
        await meeting.destroy();
        res.status(204).end();
        console.log(`meeting with id: ${id} deleted`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
// update meeting functions
async function updateMeeting(req, res, next) {
    try {
        const { id } = req.params;
        const { developmentGroupId, startTime, endTime, description, meetingRoom } = req.body;
        const meeting = await Meeting_1.default.findByPk(id);
        if (!meeting) {
            res.status(404).json({ message: `meeting with id ${id} not found` });
            return;
        }
        meeting.developmentGroupId = developmentGroupId;
        meeting.startTime = startTime;
        meeting.endTime = endTime;
        meeting.description = description;
        meeting.meetingRoom = meetingRoom;
        await meeting.save();
        res.status(200).json(meeting);
        console.log(`meeting with id: ${id} updated`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
