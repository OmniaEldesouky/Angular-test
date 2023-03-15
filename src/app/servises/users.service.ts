import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allUsers } from '../config/apis';
import { user } from '../models/user';
import { userResponseData } from '../models/userResponseData';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers():Observable<userResponseData[]>{
    return this.http.get<userResponseData[]>(allUsers);
  }

  getUser(id:number):Observable<userResponseData[]>{
    return this.http.get<userResponseData[]>(allUsers,{params:{id:id}});
  }

  addUser(user:user):Observable<userResponseData>{
    return this.http.post<userResponseData>(allUsers,user);
  }
}
