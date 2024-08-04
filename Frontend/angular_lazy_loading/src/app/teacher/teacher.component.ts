import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Update the path accordingly

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  teachers: any[] = []; // Assuming teachers is an array of objects
 
  // Inject the ApiService into the constructor
  constructor(private apiService: ApiService) {}
 
  ngOnInit(): void {
    // Call the get method on the service with 'teachers' as input
    // Subscribe to the observable it returns to get the data
    this.apiService.get('teachers').subscribe(
      (data: any[]) => {
        // Assign the data to the teachers property
        this.teachers = data;
      },
      (error: any) => {
        // Handle errors if any
        console.error(error);
      }
    );
  }
}