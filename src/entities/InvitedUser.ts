import User from './User';

export default class InvitedUser extends User {

  readonly _canBuy: boolean = false
  readonly _canComment: boolean = false
}