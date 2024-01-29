import { Router } from "express"
import { createServiceController } from "../modules/services/useCases/createService"
import { readServicesController } from "../modules/services/useCases/readServices"

const servicesRoutes = Router()

servicesRoutes.post("/services", (request, response) => {
  return createServiceController.handle(request, response)
})

servicesRoutes.get("/services", (request, response) => {
  return readServicesController.handle(request, response)
})

export { servicesRoutes }
