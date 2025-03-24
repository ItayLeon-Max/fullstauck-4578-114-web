"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../controllers/auth/controller");
const validation_1 = __importDefault(require("../../middlewares/validation"));
const validator_1 = require("../../controllers/auth/validator");
const authRouter = (0, express_1.Router)();
// auth routes
authRouter.get('/', controller_1.getAllUsers);
authRouter.post('/login', (0, validation_1.default)(validator_1.loginValidator), controller_1.login);
authRouter.post('/register', (0, validation_1.default)(validator_1.registerValidator), controller_1.register);
authRouter.delete('/:id', (0, validation_1.default)(validator_1.deleteUserValidator), controller_1.deleteUser);
authRouter.put('/:id', (0, validation_1.default)(validator_1.updateUserValidator), controller_1.updateUser);
exports.default = authRouter;
