import express from "express"

import { patientsRoutes } from "./routes/patients.routes"
import { rolesRoutes } from "./routes/roles.routes"

const app = express()
app.use(express.json())
app.use(patientsRoutes)
app.use(rolesRoutes)

app.listen(3333, () => console.log("Server is running!"))
