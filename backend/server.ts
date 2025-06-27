import express from "express";
import dotenv from "dotenv";
import { Response } from "express";
import DesigningRoutes from "./routes/DesigningRoutes";
import DevelopmentRoutes from "./routes/DevelopmentRoutes";
import FormRoutes from "./routes/forms/FormRoutes";
import cors from "cors"; // Import cors

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://dotr-global.vercel.app", // ✅ Add this line
];

// Enable CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    // allowedHeaders: ["Content-Type", "Authorization", "sentry-trace"], // Add 'sentry-trace' here
    credentials: true, // if you use cookies, auth etc.
  })
);

app.use(express.json());

app.get("/", (res: Response) => {
  res.send("DOTR Backend is Running!");
});

// Routes
app.use("/api/designing/", DesigningRoutes);
app.use("/api/development/", DevelopmentRoutes);
app.use("/api/form/", FormRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
