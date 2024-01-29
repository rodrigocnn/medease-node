import { SerrvicesRepositoryPrisma } from "../repositories/ServicesRepositoryPrisma"
import { CreateServiceController } from "./createService/CreateServiceController"
import { CreateServiceUseCase } from "./createService/CreateServiceUseCase"

const serviceRepository = new SerrvicesRepositoryPrisma()
const createServiceUseCase = new CreateServiceUseCase(serviceRepository)
export const createServiceController = new CreateServiceController(createServiceUseCase)
