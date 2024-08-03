export interface ICreateScheduleDTO {
  start: string
  end: string
  status: number
  patientId: number
  serviceId: number
  professionalId: number
  date: string
}

export interface IResponseSchedule {
  id: number
  createdAt: Date
  updatedAt: Date
}

export interface ISchedulesRepository {
  create(schedule: ICreateScheduleDTO): void
  read(): void
  exists?(id: string): Promise<boolean>
  update(id: string, schedule: ICreateScheduleDTO): Promise<IResponseSchedule | null>
}
