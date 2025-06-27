"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DesigningController_1 = require("../controllers/DesigningController");
const router = express_1.default.Router();
router.get("/faqs/:category", DesigningController_1.get_Designing_FAQs_By_Category);
router.get("/hero/:category", DesigningController_1.get_Designing_Hero_By_Category);
router.get("/offerings/:category", DesigningController_1.get_Designing_Offerings_By_Category);
router.get("/projects/:group/all", DesigningController_1.get_All_Designing_Projects);
router.get("/projects/:group/:category", DesigningController_1.get_Designing_Projects_By_Category);
router.get("/services/all", DesigningController_1.get_All_Designing_Services);
router.get("/services/:group", DesigningController_1.get_Designing_Services_By_Group);
router.get("/importance/:category", DesigningController_1.get_Designing_Importance_By_Category);
router.get("/why-dotr/:category", DesigningController_1.get_Designing_WhyDOTR_By_Category);
exports.default = router;
