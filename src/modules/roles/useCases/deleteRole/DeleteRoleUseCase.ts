import { IRolesRepository } from "../../repositories/IRolesRepository"

export class DeleteRoleUseCase {
  constructor(private rolesRepository: IRolesRepository) {}

  execute(id: string) {
    if (!id) {
      throw new Error("Id is required")
    }

    this.rolesRepository.delete(id)
  }
}
