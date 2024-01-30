import { Router } from "express"

import { createUserController } from "../modules/users/useCases/createUser"
import { authenticateUserController } from "../modules/users/useCases/authenticateUser"

const usersRoutes = Router()

usersRoutes.post("/users", (request, response) => {
  return createUserController.handle(request, response)
})

usersRoutes.post("/login", (request, response) => {
  return authenticateUserController.handle(request, response)
})

export { usersRoutes }
