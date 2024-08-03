import { SchedulesRepositoryPrisma } from "../../repositories/SchedulesRepositoryPrisma"
import { ReadSchedulesController } from "./ReadSchedulesController"
import { ReadSchedulesUseCase } from "./ReadSchedulesUseCase"

const scheduleRepository = new SchedulesRepositoryPrisma()
const readSchedulesUseCase = new ReadSchedulesUseCase(scheduleRepository)
export const readSchedulesController = new ReadSchedulesController(readSchedulesUseCase)
