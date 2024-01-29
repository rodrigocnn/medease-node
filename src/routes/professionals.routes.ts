import { Router } from "express"
import { updateProfessionalController } from "../modules/professionals/useCases/updateProfessional"
import { createProfessionalController } from "../modules/professionals/useCases/createProfessional"
import { readProfessionalsController } from "../modules/professionals/useCases/readProfessionals"

const professionalsRoutes = Router()

professionalsRoutes.post("/professionals", (request, response) => {
  return createProfessionalController.handle(request, response)
})

professionalsRoutes.get("/professionals", (request, response) => {
  return readProfessionalsController.handle(request, response)
})

professionalsRoutes.put("/professionals/:professionalId", (request, response) => {
  return updateProfessionalController.handle(request, response)
})

export { professionalsRoutes }
