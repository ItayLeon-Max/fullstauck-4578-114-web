"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDevelopmentGroups = getAllDevelopmentGroups;
exports.addDevelopmentGroup = addDevelopmentGroup;
exports.deleteDevelopmentGroup = deleteDevelopmentGroup;
exports.updateDevelopmentGroup = updateDevelopmentGroup;
require("../../models/developmentGroup");
const developmentGroup_1 = __importDefault(require("../../models/developmentGroup"));
const developmentGroup_2 = __importDefault(require("../../models/developmentGroup"));
const app_error_1 = __importDefault(require("../../errors/app-error"));
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("config"));
//get all development groups functions
async function getAllDevelopmentGroups(req, res, next) {
    try {
        const developmentGroups = await developmentGroup_1.default.findAll();
        res.status(200).json(developmentGroups);
        //print size of developmentGroups
        console.log(`Development Groups: ${developmentGroups.length}`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
// add DevelopmentGroup functions (only admin can add development groups)
async function addDevelopmentGroup(req, res, next) {
    const { name } = req.body;
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not provided'));
        }
        const token = authHeader.split(' ')[1];
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwtSecret'));
        if (decoded.role.toLowerCase() !== 'admin') {
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'Only admins can add development groups.'));
        }
        const developmentGroup = await developmentGroup_2.default.create({ name });
        res.status(http_status_codes_1.StatusCodes.CREATED).json(developmentGroup);
        console.log(`created new developmentGroup with id: ${developmentGroup.id}`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
// delete DevelopmentGroup functions (only admin can delete development groups)
async function deleteDevelopmentGroup(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer '))
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not provided'));
        const token = authHeader.split(' ')[1];
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwtSecret'));
        if (decoded.role.toLowerCase() !== 'admin')
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'Only admins can delete development groups.'));
        const { id } = req.params;
        const developmentGroup = await developmentGroup_2.default.findByPk(id);
        if (!developmentGroup)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `developmentGroup with id ${id} not found`));
        await developmentGroup.destroy();
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        console.log(`developmentGroup with id: ${id} deleted`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
// update DevelopmentGroup functions (only admin can update development groups)
async function updateDevelopmentGroup(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer '))
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not provided'));
        const token = authHeader.split(' ')[1];
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwtSecret'));
        if (decoded.role.toLowerCase() !== 'admin')
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'Only admins can update development groups.'));
        const { id } = req.params;
        const { name } = req.body;
        const developmentGroup = await developmentGroup_2.default.findByPk(id);
        if (!developmentGroup)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `developmentGroup with id ${id} not found`));
        developmentGroup.name = name;
        await developmentGroup.save();
        res.status(http_status_codes_1.StatusCodes.OK).json(developmentGroup);
        console.log(`developmentGroup with id: ${id} updated`);
    }
    catch (error) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}
