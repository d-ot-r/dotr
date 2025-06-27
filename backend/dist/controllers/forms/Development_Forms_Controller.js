"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Ecommerce_Form = exports.update_Ecommerce_Form = exports.get_All_Ecommerce_Forms = exports.submit_Ecommerce_Form = exports.delete_Custom_Website_Form = exports.update_Custom_Website_Form = exports.get_All_Custom_Website_Forms = exports.submit_Custom_Website_Form = exports.submit_Development_Form = void 0;
const FORM_Model_1 = require("../../models/forms/FORM_Model");
const Custom_Website_FORM_Model_1 = require("../../models/forms/development/Custom_Website_FORM_Model");
const Ecommerce_FORM_Model_1 = require("../../models/forms/development/Ecommerce_FORM_Model");
// Submit Development Form
const submit_Development_Form = async (req, res) => {
    try {
        const formData = await FORM_Model_1.Development_Form_Model.create(req.body);
        // console.log("🚀 Incoming form data:", req.body);
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
//#region WEB Development Services
//#region Custom Website Development FORM
const submit_Custom_Website_Form = async (req, res) => {
    try {
        const formData = await Custom_Website_FORM_Model_1.Custom_Website_FORM_Model.create(req.body);
        // console.log("🚀 Incoming form data:", req.body);
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
        const updatedForm = await Custom_Website_FORM_Model_1.Custom_Website_FORM_Model.findByIdAndUpdate(id, { details: updatedDetails }, // assumes whole `details` object is replaced
        { new: true });
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
// export const generateWebsitefromForm = async (req: Request, res: Response) => {
//   const form = req.body.details;
//   const prompt = `
// You are a website developer.
// Generate a responsive homepage in HTML5 + TailwindCSS using this info:
// - Name: ${form.firstname} ${form.lastname}
// - Company: ${form.company}
// - Tagline: ${form.tagline}
// - Industry: ${form.industry}
// - Niche: ${form.niche}
// - Location: ${form.location}
// - Reference: ${form.reference}
// - Pages: ${form.pages.join(", ")}
// - Font Style: ${form.font}
// - Colors: ${form.colors.join(", ")}
// - Custom Message: ${form.message || "None"}
// Generate:
// 1. Page title, header
// 2. An About section
// 3. A Services grid
// 4. Contact section
// Structure the output as full HTML with Tailwind CSS classes only.
// `;
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.7,
//     });
//     const html = response.choices[0].message?.content;
//     res.status(200).json({ success: true, html });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: "OpenAI request failed." });
//   }
// };
//#endregion
//#region Custom Ecommerce Development FORM
const submit_Ecommerce_Form = async (req, res) => {
    try {
        const formData = await Ecommerce_FORM_Model_1.Ecommerce_FORM_Model.create(req.body);
        // console.log("🚀 Incoming form data:", req.body);
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
        const updatedForm = await Ecommerce_FORM_Model_1.Ecommerce_FORM_Model.findByIdAndUpdate(id, { details: updatedDetails }, // assumes whole `details` object is replaced
        { new: true });
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
//#endregion
//#endregion
