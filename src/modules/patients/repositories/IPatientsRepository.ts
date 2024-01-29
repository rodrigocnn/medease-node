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
  read(): void
  update(id: string, role: ICreatePatientDTO): void
  // delete(id: string): void
  // exists?(id: string): Promise<boolean>
}
