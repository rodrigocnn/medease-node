import { ICreateProfessionalDTO, IProfessionalsRepository } from "./IProfessionalsRepository"
import { prisma } from "../../../database/prismaClient"

export class ProfessionalsRepositoryPrima implements IProfessionalsRepository {
  async create(professional: ICreateProfessionalDTO) {
    await prisma.professional.create({ data: professional })
  }

  async read() {
    const professionals = await prisma.professional.findMany()
    return professionals
  }

  async update(id: string, professional: ICreateProfessionalDTO) {
    await prisma.professional.update({
      where: {
        id: Number(id),
      },
      data: {
        name: professional.name,
        email: professional.email,
        birth: professional.birth,
        phone: professional.phone,
        rg: professional.rg,
        cpf: professional.cpf,
        address: professional.address,
        district: professional.district,
        city: professional.city,
        state: professional.state,
      } as ICreateProfessionalDTO,
    })
  }
}
