import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { deletePost, getUserPosts } from '../config/apis';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  
  getUserPost(id:number):Observable<any[]>{
    return this.http.get<any[]>(getUserPosts+id+"/posts");
  }
  deleteUserPost(id:number):Observable<any[]>{
    return this.http.delete<any[]>(deletePost+id+"/posts");
  }

}
