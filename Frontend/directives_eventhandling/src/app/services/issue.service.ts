import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class IssueService {

  constructor(private http: HttpClient) { }

  // Implement addIssue method using HttpClient for a saving a Issue details
  addIssue(issue: any): Observable<any> {
    return this.http.post("http://localhost:3000/issues", {
     title: issue.title,
     description: issue.description
    }, httpOptions);
  }

  getIssues(): Observable<any> {
    return this.http.get("http://localhost:3000/issues");
  }

  // Implement deleteIssue method to delete a issue
  deleteIssue(id: any): Observable<any> {
    return this.http.delete("http://localhost:3000/issues" + '/' + id + '/');
  }
}
