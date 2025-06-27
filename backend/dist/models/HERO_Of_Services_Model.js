"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HERO_Of_Development = exports.HERO_Of_Designing = void 0;
const mongoose_1 = require("mongoose");
const Develpoment_DB_1 = require("../config/Develpoment_DB");
const Designing_DB_1 = require("../config/Designing_DB");
const HERO_Of_Services_Schema = new mongoose_1.Schema({
    category: {
        type: String,
        required: true,
    },
    title: String,
    tagline: String,
    description: String,
    image: String,
}, {
    timestamps: true,
});
exports.HERO_Of_Designing = Designing_DB_1.Designing_Connection.model("HERO_Of_Services", HERO_Of_Services_Schema, "HERO_Of_Services");
exports.HERO_Of_Development = Develpoment_DB_1.Development_Connection.model("HERO_Of_Services", HERO_Of_Services_Schema, "HERO_Of_Services");
