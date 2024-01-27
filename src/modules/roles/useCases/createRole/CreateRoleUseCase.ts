import { IRolesRepository } from "../../repositories/IRolesRepository"

interface IRequest {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: IRolesRepository) {}

  execute(role: IRequest) {
    if (!role.name) {
      throw new Error("Name is required")
    }
    this.rolesRepository.create(role)
  }
}
