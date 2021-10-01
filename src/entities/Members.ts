import RegisteredUser from "./RegisteredUser";

export default class Members {

  private members: RegisteredUser[] = []


  public getAll(): RegisteredUser[] {
    return this.members
  }

  public add(member: RegisteredUser) {
    this.members.push(member)
  }
}
