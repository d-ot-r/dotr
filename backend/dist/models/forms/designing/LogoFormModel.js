"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo_Form_Model = void 0;
const mongoose_1 = require("mongoose");
const Form_DB_1 = require("../../../config/Form_DB");
const Logo_Form_Schema = new mongoose_1.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    tagline: { type: String },
    colors: { type: [String], required: true }, // Array of selected colors
    industry: { type: String, required: true },
    logoStyle: { type: String, required: true },
    message: { type: String },
}, {
    timestamps: true,
});
exports.Logo_Form_Model = Form_DB_1.Form_Connection.model("Logo_Designing_Forms", Logo_Form_Schema, "Logo_Designing_Forms");
