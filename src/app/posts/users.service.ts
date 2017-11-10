import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import 'rxjs/add/operator/retry';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return  (this.http.get<User[]>('api/users')
      .retry(3));
  }


  get(id: number): Observable<User> {
    return (this.http.get<User>('api/users/' + id)
      .retry(3));
  }
}
