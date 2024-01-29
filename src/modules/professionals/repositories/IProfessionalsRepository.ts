export interface ICreateProfessionalDTO {
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

export interface IProfessionalsRepository {
  create(professional: ICreateProfessionalDTO): void
  read(): void
  update(id: string, role: ICreateProfessionalDTO): void
  // delete(id: string): void
  // exists?(id: string): Promise<boolean>
}
