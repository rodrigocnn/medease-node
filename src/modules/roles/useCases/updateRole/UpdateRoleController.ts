import { Request, Response } from "express"
import { UpdateRoleUseCase } from "./UpdateRoleUseCase"

export class UpdateRoleController {
  constructor(private updateRoleUseCase: UpdateRoleUseCase) {}

  async handle(request: Request, response: Response) {
    const role = {
      id: request.params.roleId,
      ...request.body,
    }

    try {
      const roles = await this.updateRoleUseCase.execute(role)
      return response.status(201).send(roles)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
