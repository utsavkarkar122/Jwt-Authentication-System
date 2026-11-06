import mongoose from "mongoose";
import { env } from "../config/env.config.js";

export const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(env.DATABASE_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};
