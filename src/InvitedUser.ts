import User from './User';

export default class InvitedUser extends User {
  // como no esta registrado no puede commentar ni comprar
  readonly _canBuy: boolean = false
  readonly _canComment: boolean = false
}