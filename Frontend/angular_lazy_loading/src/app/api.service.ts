import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // apiUrl is http://localhost:3000
  private apiUrl: string = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {}
  
  // add a get method to the service that takes an endpoint and returns an observable
  get(endpoint: string): Observable<any> {
    // Construct the full URL by appending the endpoint to the base API URL
    const fullUrl: string = `${this.apiUrl}/${endpoint}`;
  
    // Use HttpClient to make the GET request and return the observable
    return this.http.get(fullUrl);
  }
 }