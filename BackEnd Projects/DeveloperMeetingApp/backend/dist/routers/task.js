"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/tasks/controller");
const validation_1 = __importDefault(require("../middlewares/validation"));
const validator_1 = require("../controllers/tasks/validator");
const taskRouter = (0, express_1.Router)();
// task routes
taskRouter.get('/', controller_1.getAllTasks);
taskRouter.get('/:id', controller_1.getTaskById);
taskRouter.get('/user/:userId', controller_1.getTasksByUser);
taskRouter.post('/', (0, validation_1.default)(validator_1.createTaskValidator), controller_1.addTask);
taskRouter.put('/:id', (0, validation_1.default)(validator_1.updateTaskValidator), controller_1.updateTask);
taskRouter.delete('/:id', controller_1.deleteTask);
taskRouter.post('/reminder/:id', controller_1.sendTask);
exports.default = taskRouter;
