import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  data: any[] = [];
  // inject the ApiService
  constructor(private apiService: ApiService) {}

  
  ngOnInit(): void {
    this.getStudentsData();
    this.getTeachersData();
  }

  // get data 0f all the students. You can subscribe to the observable returned by the getStudentsData() method and store the data in the data property.
  getStudentsData(): void {
    this.apiService.getStudentsData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching students data:', error);
      }
    );
  }

  // get data 0f all the teachers. You can subscribe to the observable returned by the getTeachersData() method and store the data in the data property.
  getTeachersData(): void {

    this.apiService.getTeachersData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching teachers data:', error);
      }
    );
  }
}
