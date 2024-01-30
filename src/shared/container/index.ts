import { container } from "tsyringe"
import { IRolesRepository } from "../../modules/roles/repositories/IRolesRepository"
import { RolesRepositoryPrisma } from "../../modules/roles/repositories/RolesRepositoryPrisma"

container.registerSingleton<IRolesRepository>("RolesRepositoryPrisma", RolesRepositoryPrisma)
