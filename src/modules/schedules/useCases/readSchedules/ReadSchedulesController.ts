import { Request, Response } from "express"

import { ReadSchedulesUseCase } from "./ReadSchedulesUseCase"

export class ReadSchedulesController {
  constructor(private readSchedulesUseCase: ReadSchedulesUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const schedules = await this.readSchedulesUseCase.execute()
      return response.status(201).send(schedules)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
