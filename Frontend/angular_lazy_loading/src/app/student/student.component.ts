// student/student.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Update the path accordingly
 
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: any[] = []; // Assuming students is an array of objects
 
  // Inject the ApiService into the constructor
  constructor(private apiService: ApiService) {}
 
  ngOnInit(): void {
    // Call the get method on the service with 'students' as input
    // Subscribe to the observable it returns to get the data
    this.apiService.get('students').subscribe(
      (data: any[]) => {
        // Assign the data to the students property
        this.students = data;
      },
      (error: any) => {
        // Handle errors if any
        console.error(error);
      }
    );
  }
}