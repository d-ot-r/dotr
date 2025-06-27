"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Development_Connection = void 0;
// config/Development_DB.ts
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Development_Connection = mongoose_1.default.createConnection(process.env.MONGO_URI, {
    dbName: "development",
});
/// Event listeners
exports.Development_Connection.on("connected", () => {
    console.log("-> ✅ Development_DB connected successfully.");
});
exports.Development_Connection.on("error", (err) => {
    console.error("-> ❌ Development_DB connection error:", err);
});
