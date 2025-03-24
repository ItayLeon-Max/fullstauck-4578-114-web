"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../controllers/developmentGroup/controller");
const validation_1 = __importDefault(require("../../middlewares/validation"));
const validation_2 = require("../../controllers/developmentGroup/validation");
const developmentGroupRouter = (0, express_1.Router)();
//developmentGroup routes
developmentGroupRouter.get('/', controller_1.getAllDevelopmentGroups);
developmentGroupRouter.post('/', (0, validation_1.default)(validation_2.newDevelopmentGroupValidator), controller_1.addDevelopmentGroup);
developmentGroupRouter.delete('/:id', controller_1.deleteDevelopmentGroup);
developmentGroupRouter.put('/:id', (0, validation_1.default)(validation_2.updateDevelopmentGroupValidator), controller_1.updateDevelopmentGroup);
exports.default = developmentGroupRouter;
