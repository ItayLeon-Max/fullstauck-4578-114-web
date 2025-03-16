"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketMessage;
(function (SocketMessage) {
    SocketMessage["NEW_POST"] = "NEW_POST";
    SocketMessage["NEW_COMMENT"] = "NEW_COMMENT";
    SocketMessage["FOLLOW"] = "FOLLOW";
    SocketMessage["UNFOLLOW"] = "UNFOLLOW";
})(SocketMessage || (SocketMessage = {}));
exports.default = SocketMessage;
