import app from "./app.js";
import { env } from "./config/env.config.js";
import { connectDB } from "./utils/db.js";

const PORT = env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

startServer();
