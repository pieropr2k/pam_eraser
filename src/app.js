import express from "express"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import recipesRouter from "./routes/recipes.routes.js"
import { FRONTEND_URL } from "./config.js"

const app = express()

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
}));
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());


app.use("/api", recipesRouter)
app.use("/api/auth", authRoutes);

export default app;