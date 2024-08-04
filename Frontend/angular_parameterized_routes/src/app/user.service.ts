import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'
  // inject HttpClient to make http requests
  constructor(private http: HttpClient) {}
 
  //  apiUrl http://localhost:3000/users/<id>
  //return details of user based on id
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getUsers(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}