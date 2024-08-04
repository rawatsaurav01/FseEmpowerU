import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap  } from 'rxjs';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getStudentsData(): Observable<any[]> {
    const cacheKey = 'StudentData';

    const cachedData = this.cacheService.get(cacheKey);
    if (cachedData) {
      return of(cachedData);
    }

    const url = `${this.apiUrl}/students`;
    return this.http.get<any[]>(url).pipe(
      tap((data) => this.cacheService.set(cacheKey, data))
    );
  }

  getTeachersData(): Observable<any[]> {
    const cacheKey = 'TeacherData';

    const cachedData = this.cacheService.get(cacheKey);
    if (cachedData) {
      return of(cachedData);
    }

    const url = `${this.apiUrl}/teachers`;
    return this.http.get<any[]>(url).pipe(
      tap((data) => this.cacheService.set(cacheKey, data))
    );
  }
}