"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleDetailsSchema = exports.BusinessDetailsSchema = exports.PersonalDetailsSchema = void 0;
exports.PersonalDetailsSchema = {
    clientName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
};
exports.BusinessDetailsSchema = {
    company: { type: String, required: true },
    tagline: { type: String },
    industry: { type: String, required: true },
    niche: { type: String, required: true },
};
exports.StyleDetailsSchema = {
    colors: { type: [String], required: true },
    font: { type: String, required: true },
};
