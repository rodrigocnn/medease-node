import { Request, Response } from "express"
import { UpdateProfessionalUseCase } from "./UpdateProfessionalUseCase"

export class UpdateProfessionalController {
  constructor(private updateProfessionalUseCase: UpdateProfessionalUseCase) {}

  async handle(request: Request, response: Response) {
    const service = {
      id: request.params.professionalId,
      ...request.body,
    }

    try {
      const roles = await this.updateProfessionalUseCase.execute(service)
      return response.status(201).send(roles)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
