import { IRolesRepository } from "../../repositories/IRolesRepository"

interface IRequest {
  id: string
  name: string
}

export class UpdateRoleUseCase {
  constructor(private rolesRepository: IRolesRepository) {}

  execute(role: IRequest) {
    if (!role.name) {
      throw new Error("Name is required")
    }

    this.rolesRepository.update(role.id, role)
  }
}
