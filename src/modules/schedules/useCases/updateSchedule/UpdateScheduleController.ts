import { Request, Response } from "express"
import { UpdateScheduleUseCase } from "./UpdateScheduleUseCase"
import { successResponse } from "../../../../shared/utils/responseUtils"
import { IResponseSchedule } from "../../repositories/ISchedulesRepository"

export class UpdateScheduleController {
  constructor(private updateScheduleUseCase: UpdateScheduleUseCase) {}

  async handle(request: Request, response: Response) {
    const service = {
      id: request.params.schedulesId,
      ...request.body,
    }

    try {
      const scheduleUpdated = await this.updateScheduleUseCase.execute(service)
      const result = successResponse<IResponseSchedule | null>("Agenda atualizada com sucesso", scheduleUpdated)
      return response.status(201).send(result)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
