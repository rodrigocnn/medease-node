import { IPatientsRepository } from "../../repositories/IPatientsRepository"

interface IRequest {
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

export class CreatePatientUseCase {
  constructor(private patientsRepository: IPatientsRepository) {}

  execute(patient: IRequest) {
    this.patientsRepository.create(patient)
  }
}
