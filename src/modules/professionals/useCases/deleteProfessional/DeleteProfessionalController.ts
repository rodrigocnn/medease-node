import { Request, Response } from "express"

import { DeleteProfessionalUseCase } from "./DeleteProfessionalUseCase"

export class DeleteProfessionalController {
  constructor(private deleteProfessionalUseCase: DeleteProfessionalUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id = request.params.professionalId
      await this.deleteProfessionalUseCase.execute(id)
      return response.status(201).send({ success: true })
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
