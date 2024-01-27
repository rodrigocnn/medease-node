export interface ICreateRoleDTO {
  name: string
}

export interface IRolesRepository {
  create(role: ICreateRoleDTO): void
  read(): void
}
