import { Router } from "express"
import { createRoleController } from "../modules/roles/useCases/createRole"
import { readRolesController } from "../modules/roles/useCases/readRoles"

const rolesRoutes = Router()

rolesRoutes.post("/roles", (request, response) => {
  return createRoleController.handle(request, response)
})

rolesRoutes.get("/roles", (request, response) => {
  return readRolesController.handle(request, response)
})

export { rolesRoutes }
