import { inject, injectable } from "tsyringe"

import { ISchedulesRepository } from "../../repositories/ISchedulesRepository"

interface IRequest {
  start: string
  end: string
  status: number
  patientId: number
  serviceId: number
  professionalId: number
  date: string
}

@injectable()
export class CreateScheduleUseCase {
  constructor(
    @inject("SchedulesRepositoryPrisma")
    private schedulesRepository: ISchedulesRepository,
  ) {}

  execute(schedule: IRequest) {
    if (!schedule.date) {
      throw new Error("Date is required")
    }

    this.schedulesRepository.create(schedule)
  }
}
