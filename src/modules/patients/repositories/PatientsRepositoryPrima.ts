import { ICreatePatientDTO, IPatientsRepository } from "./IPatientsRepository"
import { prisma } from "../../../database/prismaClient"

export class PatientsRepositoryPrima implements IPatientsRepository {
  async create(patient: ICreatePatientDTO) {
    await prisma.patient.create({ data: patient })
  }
}
