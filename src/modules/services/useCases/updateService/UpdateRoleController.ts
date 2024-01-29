import { Request, Response } from "express"
import { UpdateServiceUseCase } from "./UpdateRoleUseCase"

export class UpdateServiceController {
  constructor(private updateServiceUseCase: UpdateServiceUseCase) {}

  async handle(request: Request, response: Response) {
    const service = {
      id: request.params.serviceId,
      ...request.body,
    }

    try {
      const roles = await this.updateServiceUseCase.execute(service)
      return response.status(201).send(roles)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
