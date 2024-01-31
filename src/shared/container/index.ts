import { container } from "tsyringe"
import { IRolesRepository } from "../../modules/roles/repositories/IRolesRepository"
import { RolesRepositoryPrisma } from "../../modules/roles/repositories/RolesRepositoryPrisma"
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository"
import { UsersRepositoryPrisma } from "../../modules/users/repositories/UsersRepositoryPrisma"

container.registerSingleton<IRolesRepository>("RolesRepositoryPrisma", RolesRepositoryPrisma)
container.registerSingleton<IUsersRepository>("UsersRepositoryPrisma", UsersRepositoryPrisma)
