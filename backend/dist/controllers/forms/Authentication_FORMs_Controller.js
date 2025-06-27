"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate_User = void 0;
const Authentication_Model_1 = require("../../models/auth/Authentication_Model");
const authenticate_User = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Missing email or password." });
        }
        const user = await Authentication_Model_1.Authentication_Form_Model.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        // const token = jwt.sign(
        //   { id: user._id, email: user.email },
        //   process.env.JWT_SECRET!,
        //   {
        //     expiresIn: "1h",
        //   }
        // );
        res.cookie("token", user._id.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });
        res.status(200).json({ message: "Login successful" });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error." });
    }
};
exports.authenticate_User = authenticate_User;
