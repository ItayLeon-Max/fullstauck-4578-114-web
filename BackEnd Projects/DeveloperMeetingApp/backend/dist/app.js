"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = start;
const express_1 = __importStar(require("express"));
const config_1 = __importDefault(require("config"));
const sequelize_1 = __importDefault(require("./db/sequelize"));
const error_logger_1 = __importDefault(require("./middlewares/error/error-logger"));
const error_responder_1 = __importDefault(require("./middlewares/error/error-responder"));
const not_found_1 = __importDefault(require("./middlewares/not-found"));
const cors_1 = __importDefault(require("cors"));
const developmentGroup_1 = __importDefault(require("./routers/developmentGroup/developmentGroup"));
const meetings_1 = __importDefault(require("./routers/meetings"));
const reminder_1 = __importDefault(require("./routers/reminder"));
const auth_1 = __importDefault(require("./routers/auth/auth"));
const task_1 = __importDefault(require("./routers/task"));
const port = config_1.default.get('app.port');
const name = config_1.default.get('app.name');
const force = config_1.default.get('sequelize.sync.force');
const app = (0, express_1.default)();
async function start() {
    await sequelize_1.default.sync({ force });
    // middlewares
    app.use((0, cors_1.default)()); // allow any client to use this server
    app.use((0, express_1.json)()); // a middleware to extract the post/put/patch data and save it to the request object in case the content type of the request is application/json
    // routers
    app.use('/developmentGroup', developmentGroup_1.default);
    app.use('/meeting', meetings_1.default);
    app.use('/reminder', reminder_1.default);
    app.use('/auth', auth_1.default);
    app.use('/task', task_1.default);
    // special notFound middleware
    app.use(not_found_1.default);
    // error middleware
    app.use(error_logger_1.default);
    app.use(error_responder_1.default);
    // app.listen(port, () => console.log(`${name} started on port ${port}...`))
}
exports.default = app;
