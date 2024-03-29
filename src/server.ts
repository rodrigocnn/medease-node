import "reflect-metadata"
import "./shared/container"
import express from "express"
import { router } from "./routes"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // algumas versões do navegador 204
}

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors(corsOptions))
app.use(router)

app.listen(PORT, () => console.log("Server is running!"))
