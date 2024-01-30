import { Router } from "express"

import { createUserController } from "../modules/users/useCases/createUser"

const usersRoutes = Router()

usersRoutes.post("/users", (request, response) => {
  return createUserController.handle(request, response)
})

export { usersRoutes }
