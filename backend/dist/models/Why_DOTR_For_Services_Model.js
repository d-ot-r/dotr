"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Why_DOTR_For_Development = exports.Why_DOTR_For_Designing = void 0;
const mongoose_1 = require("mongoose");
const Develpoment_DB_1 = require("../config/Develpoment_DB");
const Designing_DB_1 = require("../config/Designing_DB");
const Why_DOTR_For_Services_Schema = new mongoose_1.Schema({
    category: {
        type: String,
        required: true,
    },
    reasons: [
        {
            id: {
                type: Number,
                required: true,
            },
            title: { type: String },
            description: { type: String },
            bgColor: { type: String },
        },
        { _id: true },
    ],
}, {
    timestamps: true,
});
exports.Why_DOTR_For_Designing = Designing_DB_1.Designing_Connection.model("Why_DOTR_For_Services", Why_DOTR_For_Services_Schema, "Why_DOTR_For_Services");
exports.Why_DOTR_For_Development = Develpoment_DB_1.Development_Connection.model("Why_DOTR_For_Services", Why_DOTR_For_Services_Schema, "Why_DOTR_For_Services");
