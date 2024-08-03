import { SchedulesRepositoryPrisma } from "../../repositories/SchedulesRepositoryPrisma"

import { UpdateScheduleController } from "./UpdateScheduleController"
import { UpdateScheduleUseCase } from "./UpdateScheduleUseCase"

const scheduleRepository = new SchedulesRepositoryPrisma()
const updateScheduleUseCase = new UpdateScheduleUseCase(scheduleRepository)
export const updateScheduleController = new UpdateScheduleController(updateScheduleUseCase)
