import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'


@Injectable()
export class UserService {

  constructor() {}

  public users: BehaviorSubject<string[]>= new BehaviorSubject([]);

  addUser(username : string): void {
  	this.users.subscribe((data: string[]) => data.push(username));
  }

}