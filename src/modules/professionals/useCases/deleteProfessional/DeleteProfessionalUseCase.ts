import { IProfessionalsRepository } from "../../repositories/IProfessionalsRepository"

export class DeleteProfessionalUseCase {
  constructor(private professionalRepository: IProfessionalsRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new Error("Id is required")
    }

    if (this.professionalRepository.exists) {
      const roleExists = await this.professionalRepository.exists(id)
      if (!roleExists) {
        throw new Error(`Role with id ${id} not found`)
      }
    }

    this.professionalRepository.delete(id)
  }
}
