import { Router } from "express"
import { updateProfessionalController } from "../modules/professionals/useCases/updateProfessional"
import { createProfessionalController } from "../modules/professionals/useCases/createProfessional"
import { readProfessionalsController } from "../modules/professionals/useCases/readProfessionals"
import { ShowProfessionalController } from "../modules/professionals/useCases/showProfessional/ShowProfessionalController"
import { deleteProfessionalController } from "../modules/professionals/useCases/deleteProfessional"

const professionalsRoutes = Router()

const showProfessinalController = new ShowProfessionalController()

professionalsRoutes.post("/professionals", (request, response) => {
  return createProfessionalController.handle(request, response)
})

professionalsRoutes.get("/professionals/:professionalId", (request, response) => {
  return showProfessinalController.handle(request, response)
})

professionalsRoutes.get("/professionals", (request, response) => {
  return readProfessionalsController.handle(request, response)
})

professionalsRoutes.put("/professionals/:professionalId", (request, response) => {
  return updateProfessionalController.handle(request, response)
})

professionalsRoutes.delete("/professionals/:professionalId", (request, response) => {
  return deleteProfessionalController.handle(request, response)
})

export { professionalsRoutes }
