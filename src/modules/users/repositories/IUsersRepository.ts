export interface ICreateUserDTO {
  name: string
  email: string
  password: string
  admin: boolean
}

export interface IUsersRepository {
  create(user: ICreateUserDTO): void
  read(): void
  update(id: string, user: ICreateUserDTO): void
  delete(id: string): void
  exists?(id: string): Promise<boolean>
}
