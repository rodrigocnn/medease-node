import express from "express"

import { patientsRoutes } from "./routes/patients.routes"

const app = express()
app.use(express.json())
app.use(patientsRoutes)
app.listen(3333, () => console.log("Server is running!"))
