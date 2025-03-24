"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("config"));
const reminder_1 = __importDefault(require("../models/reminder"));
const user_1 = __importDefault(require("../models/user"));
const developmentGroup_1 = __importDefault(require("../models/developmentGroup"));
const Meeting_1 = __importDefault(require("../models/Meeting"));
const task_1 = __importDefault(require("../models/task"));
const logging = config_1.default.get('sequelize.logging') ? console.log : false;
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({ 
    // [ add ALL model classes you created to the array ]:
    models: [developmentGroup_1.default, Meeting_1.default, reminder_1.default, user_1.default, task_1.default], dialect: 'mysql' }, config_1.default.get('db')), { logging }));
exports.default = sequelize;
