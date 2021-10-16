import RegisteredUser from '../entities/RegisteredUser'
import RegisteredUserFactory from '../factories/RegisteredUserFactory'
import { RegisteredUserInterface, RegisteredUserLocalStorageInterface } from '../interfaces/types'

class RegisteredUserRepository {
  private items: RegisteredUser[] = []


  public get(): RegisteredUser[] {
    return this.items
  }

  public add(data: RegisteredUserInterface): void {
    this.items.push(RegisteredUserFactory.create(data))
  }

  public addFromLocalStorage(data: RegisteredUserLocalStorageInterface): void {
    this.items.push(RegisteredUserFactory.recreate(data))
  }

  public getById(id: string): (RegisteredUser | undefined) {
    return this.items.find((item: (RegisteredUser)) => item.id == id)
  }

  public getByEmail(email: string): (RegisteredUser | undefined) {
    return this.items.find((item: (RegisteredUser)) => item.email == email)
  }
}

export default RegisteredUserRepository