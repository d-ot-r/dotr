"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/Development/DevelopmentRoutes.ts
const express_1 = __importDefault(require("express"));
const DevelopmentController_1 = require("../controllers/DevelopmentController");
const router = express_1.default.Router();
// #region FAQs
router.get("/faqs/:category", DevelopmentController_1.get_Development_FAQs_By_Category);
router.post("/faqs/add", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.add_Development_FAQs)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.put("/faqs/:category/update/:faqId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.update_Development_FAQs_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/faqs/:category/delete/:faqId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.delete_Development_FAQs_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
// #endregion
// #region HERO
router.get("/hero/:category", DevelopmentController_1.get_Development_Hero_By_Category);
router.post("/hero/:category/add", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.add_Development_HERO)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.put("/hero/:category/update/:heroId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.update_Development_HERO_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/hero/:category/delete/:heroId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.delete_Development_HERO_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
// #endregion
// #region OFFERINGs
router.get("/offerings/:category", DevelopmentController_1.get_Development_Offerings_By_Category);
router.post("/offerings/add", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.add_Development_Offerings)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.put("/offerings/:category/update/:offeringId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.update_Development_Offerings_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/offerings/:category/delete/:offeringId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.delete_Development_Offerings_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
// #endregion
// #region IMPORTANCE
router.get("/importance/:category", DevelopmentController_1.get_Development_Importance_By_Category);
router.post("/importance/:category/add", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.add_Development_Importance)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.put("/importance/:category/update/:importanceId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.update_Development_Importance_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/importance/:category/delete/:importanceId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.delete_Development_Importance_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
// #endregion
router.get("/projects/:group/all", DevelopmentController_1.get_All_Development_Projects);
router.get("/projects/:group/:category", DevelopmentController_1.get_Development_Projects_By_Category);
// #region Services
router.get("/services/all", DevelopmentController_1.get_All_Development_Services);
router.get("/services/:group", DevelopmentController_1.get_Development_Services_By_Group);
router.post("/services/add", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.add_Development_Services)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.put("/services/:group/update/:serviceId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.update_Development_Services_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/services/:group/delete/:serviceId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.delete_Development_Services_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
// #endregion
// #region Why DOTR
router.get("/why-dotr/:category", DevelopmentController_1.get_Development_WhyDOTR_By_Category);
router.post("/why-dotr/add", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.add_Development_WhyDOTR)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.put("/why-dotr/:category/update/:whyDOTRId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.update_Development_WhyDOTR_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/why-dotr/:category/delete/:whyDOTRId", async (req, res, next) => {
    try {
        await (0, DevelopmentController_1.delete_Development_WhyDOTR_By_ID)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
// #endregion
exports.default = router;
