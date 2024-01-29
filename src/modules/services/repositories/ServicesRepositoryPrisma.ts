import { prisma } from "../../../database/prismaClient"

import { ICreateServiceDTO, IServicesRepository } from "./IServicesRepository"

export class SerrvicesRepositoryPrisma implements IServicesRepository {
  async create(service: ICreateServiceDTO) {
    await prisma.service.create({ data: service })
  }
  async read() {
    const services = await prisma.service.findMany()
    return services
  }

  async update(id: string, service: ICreateServiceDTO) {
    await prisma.role.update({
      where: {
        id: Number(id),
      },
      data: {
        name: service.name,
        price: service.price,
      } as ICreateServiceDTO,
    })
  }

  async delete(id: string) {
    await prisma.role.delete({
      where: {
        id: Number(id),
      },
    })
  }

  async exists(id: string) {
    const role = await prisma.role.findFirst({
      where: {
        id: {
          equals: Number(id),
        },
      },
    })

    return !!role
  }
}
