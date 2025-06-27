"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMPORTANCE_Of_Development_Model = exports.IMPORTANCE_Of_Designing_Model = void 0;
const mongoose_1 = require("mongoose");
const Develpoment_DB_1 = require("../config/Develpoment_DB");
const Designing_DB_1 = require("../config/Designing_DB");
const IMPORTANCE_Of_Services_Schema = new mongoose_1.Schema({
    category: {
        type: String,
        required: true,
    },
    heading: String,
    subheading: String,
    paragraphs: [String],
    featureheading: String,
    features: [
        {
            icon: { type: String },
            title: { type: String },
            description: { type: String },
        },
    ],
}, {
    timestamps: true,
});
exports.IMPORTANCE_Of_Designing_Model = Designing_DB_1.Designing_Connection.model("IMPORTANCE_Of_Services", IMPORTANCE_Of_Services_Schema, "IMPORTANCE_Of_Services");
exports.IMPORTANCE_Of_Development_Model = Develpoment_DB_1.Development_Connection.model("IMPORTANCE_Of_Services", IMPORTANCE_Of_Services_Schema, "IMPORTANCE_Of_Services");
