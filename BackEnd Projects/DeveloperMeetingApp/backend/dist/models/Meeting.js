"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const developmentGroup_1 = __importDefault(require("./developmentGroup"));
const reminder_1 = __importDefault(require("./reminder"));
const task_1 = __importDefault(require("./task"));
let Meetings = class Meetings extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Default)(sequelize_typescript_1.DataType.UUIDV4),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], Meetings.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => developmentGroup_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], Meetings.prototype, "developmentGroupId", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Meetings.prototype, "startTime", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Meetings.prototype, "endTime", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Meetings.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Meetings.prototype, "meetingRoom", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => developmentGroup_1.default),
    __metadata("design:type", developmentGroup_1.default)
], Meetings.prototype, "developmentGroup", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => reminder_1.default),
    __metadata("design:type", Array)
], Meetings.prototype, "reminder", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => task_1.default),
    __metadata("design:type", Array)
], Meetings.prototype, "tasks", void 0);
Meetings = __decorate([
    (0, sequelize_typescript_1.Table)({
        underscored: true,
    })
], Meetings);
exports.default = Meetings;
