export interface ICreatePatientDTO {
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

export interface IPatientsRepository {
  create(patient: ICreatePatientDTO): void
}
