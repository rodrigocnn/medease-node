import { Request, Response } from "express"
import { CreatePatientUseCase } from "./CreatePatientUseCase"

export class CreatePatientController {
  constructor(private createPatientUseCase: CreatePatientUseCase) {}

  handle(request: Request, response: Response) {
    this.createPatientUseCase.execute({ ...request.body })
    return response.status(201).send()
  }
}
