import { prisma } from "../../../database/prismaClient"

import { ICreateServiceDTO, IResponseService, IServicesRepository } from "./IServicesRepository"

export class ServicesRepositoryPrisma implements IServicesRepository {
  async create(service: ICreateServiceDTO) {
    await prisma.service.create({ data: service })
  }
  async read() {
    const services = await prisma.service.findMany({
      where: {
        deletedAt: null,
      },
    })
    return services
  }

  async update(id: string, service: ICreateServiceDTO): Promise<IResponseService | null> {
    const result = await prisma.service.update({
      where: {
        id: Number(id),
      },
      data: {
        name: service.name,
        price: service.price,
      } as ICreateServiceDTO,
    })

    return result
      ? {
          id: result.id,
          name: result.name,
          price: Number(result.price),
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
        }
      : null
  }

  async delete(id: string) {
    const now = new Date()
    return await prisma.service.update({
      where: {
        id: Number(id),
      },
      data: {
        deletedAt: now,
      },
    })
  }

  async show(id: string): Promise<IResponseService | null> {
    const result = await prisma.service.findFirst({ where: { id: Number(id) } })
    return result
      ? {
          id: result.id,
          name: result.name,
          price: Number(result.price),
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
        }
      : null
  }

  async exists(id: string) {
    const role = await prisma.service.findFirst({
      where: {
        id: {
          equals: Number(id),
        },
      },
    })

    return !!role
  }
}
