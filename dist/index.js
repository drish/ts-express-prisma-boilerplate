"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    res.send("Express + TypScript");
});
app.listen(3001, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(3000));
});
//# sourceMappingURL=index.js.map