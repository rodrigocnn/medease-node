import { Router } from "express"
import { createRoleController } from "../modules/roles/useCases/createRole"
import { readRolesController } from "../modules/roles/useCases/readRoles"
import { updateRoleController } from "../modules/roles/useCases/updateRole"

const rolesRoutes = Router()

rolesRoutes.post("/roles", (request, response) => {
  return createRoleController.handle(request, response)
})

rolesRoutes.get("/roles", (request, response) => {
  return readRolesController.handle(request, response)
})

rolesRoutes.put("/roles/:roleId", (request, response) => {
  return updateRoleController.handle(request, response)
})

export { rolesRoutes }
