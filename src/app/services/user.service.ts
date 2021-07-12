import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private user: any;

  constructor() { }

  setUser(newUser: any) {
    this.user = newUser;
  }

  getUser(): any {
    return this.user;
  }
}
