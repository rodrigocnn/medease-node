import { Router } from "express"
import { createServiceController } from "../modules/services/useCases"

const servicesRoutes = Router()

servicesRoutes.post("/services", (request, response) => {
  return createServiceController.handle(request, response)
})

export { servicesRoutes }
