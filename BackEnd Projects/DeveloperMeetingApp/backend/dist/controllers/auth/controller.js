"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.getAllUsers = getAllUsers;
exports.login = login;
exports.register = register;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
const crypto_1 = require("crypto");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("config"));
const user_1 = __importDefault(require("../../models/user"));
const app_error_1 = __importDefault(require("../../errors/app-error"));
const http_status_codes_1 = require("http-status-codes");
// hash password
function hashPassword(password) {
    return (0, crypto_1.createHmac)('sha256', config_1.default.get('app.secret'))
        .update(password)
        .digest('hex');
}
// get all users
async function getAllUsers(req, res, next) {
    try {
        const users = await user_1.default.findAll();
        res.json(users);
    }
    catch (e) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, e.message));
    }
}
// login
async function login(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await user_1.default.findOne({
            where: {
                userName: username,
                password: hashPassword(password)
            },
        });
        if (!user)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'wrong credentials'));
        const jwt = (0, jsonwebtoken_1.sign)(user.get({ plain: true }), config_1.default.get('app.jwtSecret'));
        res.json({
            jwt,
            messages: `Welcome ${user.name}!`
        });
    }
    catch (e) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, e.message));
    }
}
// register
async function register(req, res, next) {
    try {
        const { name, username, password, email, role } = req.body;
        const user = await user_1.default.create({
            name,
            userName: username,
            password: hashPassword(password),
            email,
            role
        });
        res.json(user);
    }
    catch (e) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, e.message));
    }
}
// delete user
async function deleteUser(req, res, next) {
    try {
        const { id } = req.params;
        const user = await user_1.default.findByPk(id);
        if (!user)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'user not found'));
        await user.destroy();
        res.json({ message: 'user deleted' });
    }
    catch (e) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, e.message));
    }
}
// update user
async function updateUser(req, res, next) {
    try {
        const { id } = req.params;
        const { name, username, password, email, role } = req.body;
        const user = await user_1.default.findByPk(id);
        if (!user)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'user not found'));
        user.name = name;
        user.userName = username;
        user.password = hashPassword(password);
        user.email = email;
        user.role = role;
        await user.save();
        res.json(user);
    }
    catch (e) {
        next(new app_error_1.default(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, e.message));
    }
}
