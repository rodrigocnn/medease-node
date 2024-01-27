import { Router } from "express"
import { createRoleController } from "../modules/roles/useCases/createRole"
import { readRolesController } from "../modules/roles/useCases/readRoles"
import { updateRoleController } from "../modules/roles/useCases/updateRole"
import { deleteRoleController } from "../modules/roles/useCases/deleteRole"

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

rolesRoutes.delete("/roles/:roleId", (request, response) => {
  return deleteRoleController.handle(request, response)
})

export { rolesRoutes }
