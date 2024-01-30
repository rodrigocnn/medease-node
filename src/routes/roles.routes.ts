import { Router } from "express"

import { readRolesController } from "../modules/roles/useCases/readRoles"
import { updateRoleController } from "../modules/roles/useCases/updateRole"
import { deleteRoleController } from "../modules/roles/useCases/deleteRole"
import { CreateRoleController } from "../modules/roles/useCases/createRole/CreateRoleController"
CreateRoleController
const rolesRoutes = Router()

const createRoleController = new CreateRoleController()

rolesRoutes.post("/roles", createRoleController.handle)

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
