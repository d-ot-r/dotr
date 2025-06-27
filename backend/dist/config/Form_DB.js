"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form_Connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Form_Connection = mongoose_1.default.createConnection(process.env.MONGO_URI, {
    dbName: "form",
});
exports.Form_Connection.on("connected", () => {
    console.log("-> ✅ Form_DB connected successfully.");
});
exports.Form_Connection.on("error", (err) => {
    console.error("-> ❌ Form_DB connection error:", err);
});
