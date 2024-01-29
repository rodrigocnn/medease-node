import { ServicesRepositoryPrisma } from "../../repositories/ServicesRepositoryPrisma"
import { UpdateServiceController } from "./UpdateRoleController"
import { UpdateServiceUseCase } from "./UpdateRoleUseCase"

const serviceRepository = new ServicesRepositoryPrisma()
const updateServiceUseCase = new UpdateServiceUseCase(serviceRepository)
export const updateServiceController = new UpdateServiceController(updateServiceUseCase)
