"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_Form_Model = exports.Development_Form_Model = exports.Designing_Form_Model = void 0;
const mongoose_1 = require("mongoose");
const Form_DB_1 = require("../../config/Form_DB");
const Form_FIELDs_1 = require("./Form_FIELDs");
const FORM_Schema = new mongoose_1.Schema({
    category: { type: String, required: true },
    details: Object.assign(Object.assign(Object.assign({}, Form_FIELDs_1.PersonalDetailsSchema), Form_FIELDs_1.BusinessDetailsSchema), { service: { type: String, required: true }, message: { type: String } }),
}, {
    timestamps: true,
});
exports.Designing_Form_Model = Form_DB_1.Form_Connection.model("Designing_Forms", FORM_Schema, "Designing_Forms");
exports.Development_Form_Model = Form_DB_1.Form_Connection.model("Development_Forms", FORM_Schema, "Development_Forms");
exports.General_Form_Model = Form_DB_1.Form_Connection.model("General_Forms", FORM_Schema, "General_Forms");
