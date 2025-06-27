"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const DesigningRoutes_1 = __importDefault(require("./routes/DesigningRoutes"));
const DevelopmentRoutes_1 = __importDefault(require("./routes/DevelopmentRoutes"));
const FormRoutes_1 = __importDefault(require("./routes/forms/FormRoutes"));
const cors_1 = __importDefault(require("cors")); // Import cors
dotenv_1.default.config();
const app = (0, express_1.default)();
// Enable CORS
app.use((0, cors_1.default)({
    origin: "http://localhost:3000", // Or your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    // allowedHeaders: ["Content-Type", "Authorization", "sentry-trace"], // Add 'sentry-trace' here
    credentials: true, // if you use cookies, auth etc.
}));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("DOTR Backend is Running!");
});
// Routes
app.use("/api/designing/", DesigningRoutes_1.default);
app.use("/api/development/", DevelopmentRoutes_1.default);
app.use("/api/form/", FormRoutes_1.default);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
