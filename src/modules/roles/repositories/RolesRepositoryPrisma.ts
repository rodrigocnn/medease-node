import { prisma } from "../../../database/prismaClient"
import { ICreateRoleDTO, IRolesRepository } from "./IRolesRepository"

export class RolesRepositoryPrisma implements IRolesRepository {
  async create(role: ICreateRoleDTO) {
    await prisma.role.create({ data: role })
  }
  async read() {
    const roles = await prisma.role.findMany()
    return roles
  }

  async update(id: string, role: ICreateRoleDTO) {
    await prisma.role.update({
      where: {
        id: Number(id),
      },
      data: {
        name: role.name,
      } as ICreateRoleDTO,
    })
  }
}
