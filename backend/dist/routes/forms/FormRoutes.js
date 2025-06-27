"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Designing_Forms_Controller_1 = require("../../controllers/forms/Designing_Forms_Controller");
const Development_Forms_Controller_1 = require("../../controllers/forms/Development_Forms_Controller");
const General_Forms_Controller_1 = require("../../controllers/forms/General_Forms_Controller");
const Authentication_FORMs_Controller_1 = require("../../controllers/forms/Authentication_FORMs_Controller");
// import { submit_Admin_SignIn_Form } from "../../controllers/forms/Authentication_FORMs_Controller";
const router = express_1.default.Router();
router.post("/sign-in/submit", async (req, res, next) => {
    try {
        await (0, Authentication_FORMs_Controller_1.authenticate_User)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.post("/general/submit", General_Forms_Controller_1.submit_General_Form);
//#region DESIGNING
router.post("/designing/submit", Designing_Forms_Controller_1.submit_Designing_Form);
//#region BRAND Designing Services
router.post("/logo-designing/submit", Designing_Forms_Controller_1.submit_Logo_Form);
//#endregion
// #endregion
//#region DEVELOPMENT
router.post("/development/submit", Development_Forms_Controller_1.submit_Development_Form);
// #region WEB Development Services
router.post("/custom-website-development/submit", Development_Forms_Controller_1.submit_Custom_Website_Form);
router.get("/:category/all", Development_Forms_Controller_1.get_All_Custom_Website_Forms);
router.put("/custom-website-development/update/:id", Development_Forms_Controller_1.update_Custom_Website_Form);
router.delete("/custom-website-development/delete/:id", Development_Forms_Controller_1.delete_Custom_Website_Form);
// router.post("/generate/website", generateWebsitefromForm);
router.post("/ecommerce-development/submit", Development_Forms_Controller_1.submit_Ecommerce_Form);
router.get("/:category/all", Development_Forms_Controller_1.get_All_Ecommerce_Forms);
router.put("/ecommerce-development/update/:id", Development_Forms_Controller_1.update_Ecommerce_Form);
router.delete("/ecommerce-development/delete/:id", Development_Forms_Controller_1.delete_Ecommerce_Form);
// #endregion
// #endregion
exports.default = router;
