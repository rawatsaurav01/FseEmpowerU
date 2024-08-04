import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): Observable<string> {
    // Simulate an API call that may throw an error randomly
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
    //  Write code here for handling the exception
    return throwError('Error fetching data!');
  }

    return new Observable((observer) => {
      observer.next('Mock data');
      observer.complete();
    });
  }
}
