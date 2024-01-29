export interface ICreateServiceDTO {
  name: string
  price: number
}

export interface IServicesRepository {
  create(service: ICreateServiceDTO): void
  read(): void
  update(id: string, role: ICreateServiceDTO): void
  delete(id: string): void
  exists?(id: string): Promise<boolean>
}
