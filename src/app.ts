import express from "express";
import morgan from "morgan";
// import usersRouter from "./routes/users.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

// app.use("/api/users", usersRouter);

app.use(errorHandler);

export default app;