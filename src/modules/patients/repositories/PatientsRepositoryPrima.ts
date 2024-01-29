import { ICreatePatientDTO, IPatientsRepository } from "./IPatientsRepository"
import { prisma } from "../../../database/prismaClient"

export class PatientsRepositoryPrima implements IPatientsRepository {
  async create(patient: ICreatePatientDTO) {
    await prisma.patient.create({ data: patient })
  }

  async read() {
    const patients = await prisma.patient.findMany()
    return patients
  }

  async update(id: string, patient: ICreatePatientDTO) {
    await prisma.patient.update({
      where: {
        id: Number(id),
      },
      data: {
        name: patient.name,
        email: patient.email,
        birth: patient.birth,
        phone: patient.phone,
        rg: patient.rg,
        cpf: patient.cpf,
        address: patient.address,
        district: patient.district,
        city: patient.city,
        state: patient.state,
      } as ICreatePatientDTO,
    })
  }
}
