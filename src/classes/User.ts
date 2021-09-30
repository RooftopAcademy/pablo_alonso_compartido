export default class User {

  readonly _canBuy: boolean = false
  readonly _canComment: boolean = false


  public get canBuy(): boolean {
    return this._canBuy
  }
  public get canComment(): boolean {
    return this._canComment
  }
}
