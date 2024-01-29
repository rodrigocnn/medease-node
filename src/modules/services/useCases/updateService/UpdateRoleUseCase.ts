import { IServicesRepository } from "../../repositories/IServicesRepository"

interface IRequest {
  id: string
  name: string
  price: number
}

export class UpdateServiceUseCase {
  constructor(private servicesRepository: IServicesRepository) {}

  execute(service: IRequest) {
    if (!service.name || !service.price) {
      throw new Error("Name and Price are required")
    }

    this.servicesRepository.update(service.id, service)
  }
}
