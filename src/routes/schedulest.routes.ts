import { Router } from "express"
import { CreateScheduleController } from "../modules/schedules/useCases/createSchedule/CreateScheduleController"
import { readSchedulesController } from "../modules/schedules/useCases/readSchedules"
import { updateScheduleController } from "../modules/schedules/useCases/updateSchedule"

const schedulesRoutes = Router()

const createScheduleController = new CreateScheduleController()

schedulesRoutes.post("/schedules", createScheduleController.handle)

schedulesRoutes.get("/schedules", (request, response) => {
  return readSchedulesController.handle(request, response)
})

schedulesRoutes.put("/schedules/:schedulesId", (request, response) => {
  return updateScheduleController.handle(request, response)
})

export { schedulesRoutes }
