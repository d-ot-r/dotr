"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OFFERINGs_Of_Development_Model = exports.OFFERINGs_Of_Designing_Model = void 0;
const mongoose_1 = require("mongoose");
const Develpoment_DB_1 = require("../config/Develpoment_DB");
const Designing_DB_1 = require("../config/Designing_DB");
const OFFERINGs_Of_Services_Schema = new mongoose_1.Schema({
    category: { type: String, required: true },
    offerings: [
        {
            id: { type: Number, required: true },
            title: { type: String, required: true },
            tagline: { type: String, required: true },
            description: { type: String, required: true },
            icon: { type: String, required: true },
        },
        { _id: true },
    ],
}, { timestamps: true });
exports.OFFERINGs_Of_Designing_Model = Designing_DB_1.Designing_Connection.model("OFFERINGs_Of_Services", OFFERINGs_Of_Services_Schema, "OFFERINGs_Of_Services");
exports.OFFERINGs_Of_Development_Model = Develpoment_DB_1.Development_Connection.model("OFFERINGs_Of_Services", OFFERINGs_Of_Services_Schema, "OFFERINGs_Of_Services");
