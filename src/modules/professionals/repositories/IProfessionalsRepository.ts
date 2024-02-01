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

export interface IResponseProfessional {
  id: number
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
  createdAt: Date
  updatedAt: Date
}

export interface IProfessionalsRepository {
  create(professional: ICreateProfessionalDTO): void
  read(): void
  show(id: string): Promise<IResponseProfessional | null>
  update(id: string, professional: ICreateProfessionalDTO): void
  // delete(id: string): void
  exists?(id: string): Promise<boolean>
}
