"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submit_General_Form = void 0;
const FORM_Model_1 = require("../../models/forms/FORM_Model");
const submit_General_Form = async (req, res) => {
    try {
        const formData = await FORM_Model_1.General_Form_Model.create(req.body);
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
exports.submit_General_Form = submit_General_Form;
