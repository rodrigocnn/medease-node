import { IResponseSchedule, ISchedulesRepository } from "../../repositories/ISchedulesRepository"

interface IRequest {
  id: string
  start: string
  end: string
  status: number
  patientId: number
  serviceId: number
  professionalId: number
  date: string
}

export class UpdateScheduleUseCase {
  constructor(private schedulesRepository: ISchedulesRepository) {}

  async execute(schedule: IRequest): Promise<IResponseSchedule | null> {
    if (!schedule.date || !schedule.patientId) {
      throw new Error("Name and Price are required")
    }

    return await this.schedulesRepository.update(schedule.id, schedule)
  }
}
