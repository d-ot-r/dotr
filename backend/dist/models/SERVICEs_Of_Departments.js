"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Development_Services_Model = exports.Designing_Services_Model = void 0;
const mongoose_1 = require("mongoose");
const Develpoment_DB_1 = require("../config/Develpoment_DB");
const Designing_DB_1 = require("../config/Designing_DB");
const Services_Schema = new mongoose_1.Schema({
    group: {
        type: String,
        required: true,
    },
    services: [
        {
            id: {
                type: Number,
                required: true,
            },
            title: { type: String },
            description: { type: String },
            image: { type: String },
            icons: { type: [String] },
            link: { type: String },
        },
        { _id: true },
    ],
}, { timestamps: true });
exports.Designing_Services_Model = Designing_DB_1.Designing_Connection.model("Designing_Services", Services_Schema, "Designing_Services");
exports.Development_Services_Model = Develpoment_DB_1.Development_Connection.model("Development_Services", Services_Schema, "Development_Services");
