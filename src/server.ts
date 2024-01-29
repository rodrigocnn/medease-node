import express from "express"

import { patientsRoutes } from "./routes/patients.routes"
import { rolesRoutes } from "./routes/roles.routes"
import { servicesRoutes } from "./routes/service.routes"

const app = express()
app.use(express.json())
app.use(patientsRoutes)
app.use(rolesRoutes)
app.use(servicesRoutes)

app.listen(3333, () => console.log("Server is running!"))
