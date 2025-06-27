"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Designing_Connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Designing_Connection = mongoose_1.default.createConnection(process.env.MONGO_URI, {
    dbName: "designing",
});
exports.Designing_Connection.on("connected", () => {
    console.log("-> ✅ Designing_DB connected successfully.");
});
exports.Designing_Connection.on("error", (err) => {
    console.error("-> ❌ Designing_DB connection error:", err);
});
