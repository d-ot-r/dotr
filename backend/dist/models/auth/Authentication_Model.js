"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication_Form_Model = void 0;
const mongoose_1 = require("mongoose");
const Form_DB_1 = require("../../config/Form_DB");
const Authentication_Form_Schema = new mongoose_1.Schema({
    name: { type: String },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Authentication_Form_Model = Form_DB_1.Form_Connection.model("Authentication_Form", Authentication_Form_Schema, "Authentication_Forms");
