import { prisma } from "../../../database/prismaClient"
import { ICreateRoleDTO, IRolesRepository } from "./IRolesRepository"

export class RolesRepositoryPrisma implements IRolesRepository {
  async create(role: ICreateRoleDTO) {
    await prisma.role.create({ data: role })
  }
}
