/*
import express from "express"
import cors from "cors"
import morgan from "morgan"
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

const port = 3000
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})

*/