import { IProfessionalsRepository } from "../../repositories/IProfessionalsRepository"

interface IRequest {
  id: string
  name: string
  email: string
  birth: string
  phone: string
  rg: string
  cpf: string
  address: string
  district: string
  city: string
  state: string
}

export class UpdateProfessionalUseCase {
  constructor(private professionalRepository: IProfessionalsRepository) {}

  execute(professional: IRequest) {
    if (!professional.name || !professional.email) {
      throw new Error("Name and email are required.")
    }

    this.professionalRepository.update(professional.id, professional)
  }
}
