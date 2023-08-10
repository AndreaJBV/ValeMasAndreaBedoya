import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/photos`)
  }

  getAlbumDetail(albumId: number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/photos/${albumId}`);
  }
}
