"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserValidator = exports.updateUserValidator = exports.registerValidator = exports.loginValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginValidator = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});
exports.registerValidator = joi_1.default.object({
    name: joi_1.default.string().min(5).required(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    role: joi_1.default.string().valid('Admin', 'User').required()
});
exports.updateUserValidator = exports.registerValidator;
exports.deleteUserValidator = joi_1.default.object({
    id: joi_1.default.string().required()
});
