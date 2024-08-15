import { prisma } from "../../../database/prismaClient"
import { ICreateScheduleDTO, ISchedulesRepository } from "./ISchedulesRepository"

export class SchedulesRepositoryPrisma implements ISchedulesRepository {
  async create(schedule: ICreateScheduleDTO): Promise<void> {
    await prisma.schedule.create({ data: schedule })
  }

  async read() {
    const params = {
      include: {
        patient: true,
      },
      where: {
        status: {
          equals: Number(1),
        },
      },
    }
    const schedules = await prisma.schedule.findMany(params)
    return schedules
  }

  async exists(id: string) {
    const schedule = await prisma.schedule.findFirst({
      where: {
        id: {
          equals: Number(id),
        },
      },
    })

    return !!schedule
  }

  async update(id: string, schedule: ICreateScheduleDTO) {
    return await prisma.schedule.update({
      where: {
        id: Number(id),
      },
      data: {
        start: schedule.start,
        end: schedule.end,
        status: schedule.status,
        patientId: schedule.patientId,
        serviceId: schedule.serviceId,
        professionalId: schedule.professionalId,
        date: schedule.date,
      } as ICreateScheduleDTO,
    })
  }
}
