import { RolesRepositoryPrisma } from "../../repositories/RolesRepositoryPrisma"
import { CreateRoleController } from "./CreateRoleController"
import { CreateRoleUseCase } from "./CreateRoleUseCase"

const roleRepository = new RolesRepositoryPrisma()
const createRoleUseCase = new CreateRoleUseCase(roleRepository)
export const createRoleController = new CreateRoleController(createRoleUseCase)
