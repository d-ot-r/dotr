"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Ecommerce_Form = exports.update_Ecommerce_Form = exports.get_All_Ecommerce_Forms = exports.submit_Ecommerce_Form = exports.delete_Custom_Website_Form = exports.update_Custom_Website_Form = exports.get_All_Custom_Website_Forms = exports.submit_Custom_Website_Form = exports.submit_Development_Form = void 0;
const FORM_Model_1 = require("../../models/forms/FORM_Model");
const Custom_Website_FORM_Model_1 = require("../../models/forms/development/Custom_Website_FORM_Model");
const Ecommerce_FORM_Model_1 = require("../../models/forms/development/Ecommerce_FORM_Model");
const submit_Development_Form = async (req, res) => {
    try {
        const formData = await FORM_Model_1.Development_Form_Model.create(req.body);
        res
            .status(201)
            .json({ success: true, message: "Form submitted!", data: formData });
    }
    catch (error) {
        console.error("❌ Error while saving logo form:", error);
        res.status(500).json({
            success: false,
            message: "Form submission failed.",
            error: error.message,
        });
    }
};
exports.submit_Development_Form = submit_Development_Form;
const submit_Custom_Website_Form = async (req, res) => {
    try {
        const formData = await Custom_Website_FORM_Model_1.Custom_Website_FORM_Model.create(req.body);
        res
            .status(201)
            .json({ success: true, message: "Form submitted!", data: formData });
    }
    catch (error) {
        console.error("❌ Error while saving logo form:", error);
        res.status(500).json({
            success: false,
            message: "Form submission failed.",
            error: error.message,
        });
    }
};
exports.submit_Custom_Website_Form = submit_Custom_Website_Form;
const get_All_Custom_Website_Forms = async (req, res) => {
    try {
        const category = req.params.category;
        const forms = await Custom_Website_FORM_Model_1.Custom_Website_FORM_Model.find({ category: category });
        res.status(200).json({ success: true, data: forms });
    }
    catch (error) {
        console.error("❌ Error while fetching forms:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching forms.",
            error: error.message,
        });
    }
};
exports.get_All_Custom_Website_Forms = get_All_Custom_Website_Forms;
const update_Custom_Website_Form = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDetails = req.body;
        const updatedForm = await Custom_Website_FORM_Model_1.Custom_Website_FORM_Model.findByIdAndUpdate(id, { details: updatedDetails }, { new: true });
        res.status(200).json({ success: true, data: updatedForm });
    }
    catch (error) {
        console.error("❌ Error while updating form:", error);
        res.status(500).json({
            success: false,
            message: "Error updating form.",
            error: error.message,
        });
    }
};
exports.update_Custom_Website_Form = update_Custom_Website_Form;
const delete_Custom_Website_Form = async (req, res) => {
    try {
        const { id } = req.params;
        await Custom_Website_FORM_Model_1.Custom_Website_FORM_Model.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Form deleted!" });
    }
    catch (error) {
        console.error("❌ Error while deleting form:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting form.",
            error: error.message,
        });
    }
};
exports.delete_Custom_Website_Form = delete_Custom_Website_Form;
const submit_Ecommerce_Form = async (req, res) => {
    try {
        const formData = await Ecommerce_FORM_Model_1.Ecommerce_FORM_Model.create(req.body);
        res
            .status(201)
            .json({ success: true, message: "Form submitted!", data: formData });
    }
    catch (error) {
        console.error("❌ Error while saving logo form:", error);
        res.status(500).json({
            success: false,
            message: "Form submission failed.",
            error: error.message,
        });
    }
};
exports.submit_Ecommerce_Form = submit_Ecommerce_Form;
const get_All_Ecommerce_Forms = async (req, res) => {
    try {
        const category = req.params.category;
        const forms = await Ecommerce_FORM_Model_1.Ecommerce_FORM_Model.find({ category: category });
        res.status(200).json({ success: true, data: forms });
    }
    catch (error) {
        console.error("❌ Error while fetching forms:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching forms.",
            error: error.message,
        });
    }
};
exports.get_All_Ecommerce_Forms = get_All_Ecommerce_Forms;
const update_Ecommerce_Form = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDetails = req.body;
        const updatedForm = await Ecommerce_FORM_Model_1.Ecommerce_FORM_Model.findByIdAndUpdate(id, { details: updatedDetails }, { new: true });
        res.status(200).json({ success: true, data: updatedForm });
    }
    catch (error) {
        console.error("❌ Error while updating form:", error);
        res.status(500).json({
            success: false,
            message: "Error updating form.",
            error: error.message,
        });
    }
};
exports.update_Ecommerce_Form = update_Ecommerce_Form;
const delete_Ecommerce_Form = async (req, res) => {
    try {
        const { id } = req.params;
        await Ecommerce_FORM_Model_1.Ecommerce_FORM_Model.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Form deleted!" });
    }
    catch (error) {
        console.error("❌ Error while deleting form:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting form.",
            error: error.message,
        });
    }
};
exports.delete_Ecommerce_Form = delete_Ecommerce_Form;
