"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECTs_Of_Development = exports.PROJECTs_Of_Designing = void 0;
const mongoose_1 = require("mongoose");
const Designing_DB_1 = require("../config/Designing_DB");
const Develpoment_DB_1 = require("../config/Develpoment_DB");
const PROJECTs_Of_Services_Schema = new mongoose_1.Schema({
    group: { type: String, required: true },
    category: {
        type: String,
        required: true,
    },
    projects: [
        {
            id: {
                type: Number,
                required: true,
            },
            title: { type: String },
            description: { type: String },
            button: { type: String },
            image: { type: String },
        },
    ],
}, {
    timestamps: true,
});
exports.PROJECTs_Of_Designing = Designing_DB_1.Designing_Connection.model("PROJECTs_Of_Services", PROJECTs_Of_Services_Schema, "PROJECTs_Of_Services");
exports.PROJECTs_Of_Development = Develpoment_DB_1.Development_Connection.model("PROJECTs_Of_Services", PROJECTs_Of_Services_Schema, "PROJECTs_Of_Services");
