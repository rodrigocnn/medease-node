import { IPatientsRepository } from "../../repositories/IPatientsRepository"

export class DeletePatientUseCase {
  constructor(private patientsRepository: IPatientsRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new Error("Id is required")
    }

    if (this.patientsRepository.exists) {
      const patientExists = await this.patientsRepository.exists(id)
      if (!patientExists) {
        throw new Error(`Role with id ${id} not found`)
      }
    }

    this.patientsRepository.delete(id)
  }
}
