import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }

  getUsers(page:number):Observable<any[]>{
    const startPage = (page -1)*10;
    return this.http.get<any[]>(`${this.apiUrl}/users?_start=${startPage}&_limit=10`)
  }

  getUser(userId: number) : Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/users/${userId}`)
  }

  getUserPosts(userId: number) : Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/users/${userId}/posts`)
  }

  getCommentsForPost(postId: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/posts/${postId}/comments`)
  }
}
