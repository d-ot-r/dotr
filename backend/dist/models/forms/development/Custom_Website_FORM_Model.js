"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custom_Website_FORM_Model = void 0;
const mongoose_1 = require("mongoose");
const Form_DB_1 = require("../../../config/Form_DB");
const Form_FIELDs_1 = require("../Form_FIELDs");
const FORM_Schema = new mongoose_1.Schema({
    category: { type: String, required: true },
    clientName: { type: String },
    company: { type: String },
    details: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Form_FIELDs_1.PersonalDetailsSchema), Form_FIELDs_1.BusinessDetailsSchema), { reference: { type: String }, pages: { type: [String], required: true } }), Form_FIELDs_1.StyleDetailsSchema), { message: { type: String } }),
}, {
    timestamps: true,
});
FORM_Schema.pre("save", function (next) {
    var _a, _b;
    this.clientName = (_a = this.details) === null || _a === void 0 ? void 0 : _a.clientName;
    this.company = (_b = this.details) === null || _b === void 0 ? void 0 : _b.company;
    next();
});
exports.Custom_Website_FORM_Model = Form_DB_1.Form_Connection.model("WEB_Development_Forms", FORM_Schema, "WEB_Development_Forms");
