import { Router } from "express"
import { createPatientController } from "../modules/patients/useCases/createPatient"

const patientsRoutes = Router()

patientsRoutes.post("/patients", (request, response) => {
  return createPatientController.handle(request, response)
})

export { patientsRoutes }
