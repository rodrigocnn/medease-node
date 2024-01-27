import { Router } from "express"
import { createRoleController } from "../modules/roles/useCases/createRole"

const rolesRoutes = Router()

rolesRoutes.post("/roles", (request, response) => {
  return createRoleController.handle(request, response)
})

export { rolesRoutes }
