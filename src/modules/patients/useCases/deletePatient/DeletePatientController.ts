import { Request, Response } from "express"
import { DeletePatientUseCase } from "./DeletePatientUseCase"

export class DeletePatientController {
  constructor(private deleteProfessionalUseCase: DeletePatientUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id = request.params.patientId
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
