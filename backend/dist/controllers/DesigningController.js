"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_Designing_WhyDOTR_By_Category = exports.get_Designing_Services_By_Group = exports.get_All_Designing_Services = exports.get_Designing_Projects_By_Category = exports.get_All_Designing_Projects = exports.delete_Designing_Offerings_By_ID = exports.update_Designing_Offering_By_ID = exports.add_Designing_Offerings = exports.get_Designing_Offerings_By_Category = exports.get_Designing_Importance_By_Category = exports.get_Designing_Hero_By_Category = exports.get_Designing_FAQs_By_Category = void 0;
const FAQs_Of_Services_Model_1 = require("../models/FAQs_Of_Services_Model");
const HERO_Of_Services_Model_1 = require("../models/HERO_Of_Services_Model");
const IMPORTANCE_Of_Services_Model_1 = require("../models/IMPORTANCE_Of_Services_Model");
const OFFERINGs_Of_Services_Model_1 = require("../models/OFFERINGs_Of_Services_Model");
const PROJECTs_Of_Services_Model_1 = require("../models/PROJECTs_Of_Services_Model");
const SERVICEs_Of_Departments_1 = require("../models/SERVICEs_Of_Departments");
const Why_DOTR_For_Services_Model_1 = require("../models/Why_DOTR_For_Services_Model");
const get_Designing_FAQs_By_Category = async (req, res) => {
    try {
        const { category } = req.params;
        const services = await FAQs_Of_Services_Model_1.FAQs_Of_Designing_Model.find({ category: category });
        res.status(200).json(services);
    }
    catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ message: "Error fetching services." });
    }
};
exports.get_Designing_FAQs_By_Category = get_Designing_FAQs_By_Category;
const get_Designing_Hero_By_Category = async (req, res) => {
    try {
        const { category } = req.params;
        const hero = await HERO_Of_Services_Model_1.HERO_Of_Designing.find({ category: category });
        res.status(200).json(hero);
    }
    catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ message: "Error fetching services." });
    }
};
exports.get_Designing_Hero_By_Category = get_Designing_Hero_By_Category;
const get_Designing_Importance_By_Category = async (req, res) => {
    try {
        const { category } = req.params;
        const importance = await IMPORTANCE_Of_Services_Model_1.IMPORTANCE_Of_Designing_Model.find({
            category: category,
        });
        res.status(200).json(importance);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch importance by category" });
    }
};
exports.get_Designing_Importance_By_Category = get_Designing_Importance_By_Category;
const get_Designing_Offerings_By_Category = async (req, res) => {
    try {
        const { category } = req.params;
        const offerings = await OFFERINGs_Of_Services_Model_1.OFFERINGs_Of_Designing_Model.find({
            category: category,
        });
        res.status(200).json(offerings);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch offerings by category" });
    }
};
exports.get_Designing_Offerings_By_Category = get_Designing_Offerings_By_Category;
const add_Designing_Offerings = async (req, res) => {
    try {
        const { category, offerings } = req.body;
        if (!category || !Array.isArray(offerings)) {
            return res
                .status(400)
                .json({ message: "Missing category or offerings array." });
        }
        const categoryDoc = await OFFERINGs_Of_Services_Model_1.OFFERINGs_Of_Designing_Model.findOne({
            category,
        });
        if (categoryDoc) {
            const newOfferings = offerings.filter((offering) => {
                return !categoryDoc.offerings.some((existing) => existing.id === offering.id);
            });
            if (newOfferings.length === 0) {
                return res
                    .status(409)
                    .json({ message: "All offerings already exist in this category." });
            }
            categoryDoc.offerings.push(...newOfferings);
            const updatedDoc = await categoryDoc.save();
            return res.status(200).json({
                message: "New offerings added to existing category.",
                addedCount: newOfferings.length,
                updatedDoc,
            });
        }
        else {
            const newCategory = new OFFERINGs_Of_Services_Model_1.OFFERINGs_Of_Designing_Model({
                category,
                offerings,
            });
            await newCategory.save();
            return res
                .status(201)
                .json({ message: "New category created with offerings." });
        }
    }
    catch (error) {
        console.error("Error adding offerings:", error);
        res.status(500).json({ message: "Server error." });
    }
};
exports.add_Designing_Offerings = add_Designing_Offerings;
const update_Designing_Offering_By_ID = async (req, res) => {
    try {
        const { category, offeringId } = req.params;
        const { title, tagline, description, icon } = req.body;
        if (!category || !offeringId) {
            return res
                .status(400)
                .json({ message: "Missing category or offeringId." });
        }
        const result = await OFFERINGs_Of_Services_Model_1.OFFERINGs_Of_Designing_Model.findOneAndUpdate({ category, "offerings._id": offeringId }, {
            $set: {
                "offerings.$.title": title,
                "offerings.$.tagline": tagline,
                "offerings.$.description": description,
                "offerings.$.icon": icon,
            },
        }, { new: true });
        if (!result) {
            return res
                .status(404)
                .json({ message: "Offering or category not found." });
        }
        const updatedOffering = result.offerings.find((offering) => offering._id.toString() === offeringId);
        return res.status(200).json(updatedOffering);
    }
    catch (error) {
        console.error("Error updating offering:", error);
        return res.status(500).json({ message: "Server error." });
    }
};
exports.update_Designing_Offering_By_ID = update_Designing_Offering_By_ID;
const delete_Designing_Offerings_By_ID = async (req, res) => {
    try {
        const { category, offeringId } = req.params;
        if (!category || !offeringId) {
            return res
                .status(400)
                .json({ message: "Add category and offeringId..." });
        }
        const categoryDoc = await OFFERINGs_Of_Services_Model_1.OFFERINGs_Of_Designing_Model.findOne({
            category,
        });
        if (!categoryDoc) {
            return res.status(404).json({ message: "Category not found..." });
        }
        const offeringExists = categoryDoc.offerings.some((offering) => offering._id.toString() === offeringId);
        if (!offeringExists) {
            return res
                .status(404)
                .json({ message: "Offering not found in category." });
        }
        const updatedDoc = await OFFERINGs_Of_Services_Model_1.OFFERINGs_Of_Designing_Model.findOneAndUpdate({ category }, { $pull: { offerings: { _id: offeringId } } }, { new: true });
        if (!updatedDoc) {
            return res
                .status(404)
                .json({ message: "Category or offering not found." });
        }
        return res.status(200).json({
            message: "Offering deleted from category.",
            updatedDoc,
        });
    }
    catch (error) {
        console.error("Error deleting offering:", error);
        res.status(500).json({ message: "Server error." });
    }
};
exports.delete_Designing_Offerings_By_ID = delete_Designing_Offerings_By_ID;
const get_All_Designing_Projects = async (req, res) => {
    try {
        const { group } = req.params;
        const designing_projects = await PROJECTs_Of_Services_Model_1.PROJECTs_Of_Designing.find({
            group: group,
        });
        res.status(200).json(designing_projects);
    }
    catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ message: "Error fetching services." });
    }
};
exports.get_All_Designing_Projects = get_All_Designing_Projects;
const get_Designing_Projects_By_Category = async (req, res) => {
    try {
        const { group } = req.params;
        const { category } = req.params;
        const designing_projects = await PROJECTs_Of_Services_Model_1.PROJECTs_Of_Designing.find({
            group: group,
            category: category,
        });
        res.status(200).json(designing_projects);
    }
    catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ message: "Error fetching services." });
    }
};
exports.get_Designing_Projects_By_Category = get_Designing_Projects_By_Category;
const get_All_Designing_Services = async (res) => {
    try {
        const services = await SERVICEs_Of_Departments_1.Designing_Services_Model.find();
        res.status(200).json(services);
    }
    catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ message: "Error fetching services." });
    }
};
exports.get_All_Designing_Services = get_All_Designing_Services;
const get_Designing_Services_By_Group = async (req, res) => {
    try {
        const { group } = req.params;
        const services = await SERVICEs_Of_Departments_1.Designing_Services_Model.findOne({
            group: group,
        });
        res.status(200).json(services);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch services by category" });
    }
};
exports.get_Designing_Services_By_Group = get_Designing_Services_By_Group;
const get_Designing_WhyDOTR_By_Category = async (req, res) => {
    try {
        const { category } = req.params;
        const services = await Why_DOTR_For_Services_Model_1.Why_DOTR_For_Designing.find({
            category: category,
        });
        res.status(200).json(services);
    }
    catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ message: "Error fetching services." });
    }
};
exports.get_Designing_WhyDOTR_By_Category = get_Designing_WhyDOTR_By_Category;
