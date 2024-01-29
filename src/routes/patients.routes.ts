import { Router } from "express"
import { createPatientController } from "../modules/patients/useCases/createPatient"
import { readPatientsController } from "../modules/patients/useCases/readPatients"
import { updatePatientController } from "../modules/patients/useCases/updatePatient"

const patientsRoutes = Router()

patientsRoutes.post("/patients", (request, response) => {
  return createPatientController.handle(request, response)
})

patientsRoutes.get("/patients", (request, response) => {
  return readPatientsController.handle(request, response)
})

patientsRoutes.put("/patients/:patientId", (request, response) => {
  return updatePatientController.handle(request, response)
})

export { patientsRoutes }
