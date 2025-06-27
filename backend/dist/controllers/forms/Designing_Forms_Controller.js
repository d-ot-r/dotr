"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submit_Logo_Form = exports.submit_Designing_Form = void 0;
const FORM_Model_1 = require("../../models/forms/FORM_Model");
const LogoFormModel_1 = require("../../models/forms/designing/LogoFormModel");
// Submit Designing Form
const submit_Designing_Form = async (req, res) => {
    try {
        const formData = await FORM_Model_1.Designing_Form_Model.create(req.body);
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
exports.submit_Designing_Form = submit_Designing_Form;
//#region BRAND Designing Services
const submit_Logo_Form = async (req, res) => {
    try {
        const formData = await LogoFormModel_1.Logo_Form_Model.create(req.body);
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
exports.submit_Logo_Form = submit_Logo_Form;
//#endregion
