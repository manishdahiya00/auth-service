import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import logger from "./config/logger";
import createHttpError, { HttpError } from "http-errors";
import authRouter from "./routes/auth";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(cookieParser());

app.get("/", async (req, res, next) => {
    const err = createHttpError(401, "You cannot access this route.");
    next(err);
});

app.use("/auth", authRouter);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || err.status || 500;
    res.status(statusCode).json({
        errors: [
            { type: err.name, message: err.message, path: "", location: "" },
        ],
    });
});
export default app;
