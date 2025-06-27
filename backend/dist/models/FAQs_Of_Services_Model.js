"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQs_Of_Development_Model = exports.FAQs_Of_Designing_Model = void 0;
const mongoose_1 = require("mongoose");
const Develpoment_DB_1 = require("../config/Develpoment_DB");
const Designing_DB_1 = require("../config/Designing_DB");
const FAQs_Of_Services_Schema = new mongoose_1.Schema({
    category: {
        type: String,
        required: true,
    },
    faqs: [
        {
            id: {
                type: Number,
                required: true,
            },
            title: { type: String },
            description: { type: String },
            ctaText: { type: String },
            ctaLink: { type: String },
            icon: { type: String },
            intro: { type: [String] },
            points: { type: [String] },
            outro: { type: [String] },
        },
        { _id: true },
    ],
}, {
    timestamps: true,
});
exports.FAQs_Of_Designing_Model = Designing_DB_1.Designing_Connection.model("FAQs_Of_Services", FAQs_Of_Services_Schema, "FAQs_Of_Services");
exports.FAQs_Of_Development_Model = Develpoment_DB_1.Development_Connection.model("FAQs_Of_Services", FAQs_Of_Services_Schema, "FAQs_Of_Services");
