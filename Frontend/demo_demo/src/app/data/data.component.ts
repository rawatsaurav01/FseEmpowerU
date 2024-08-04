import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent  implements OnInit {
  data: any;
  error: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        // Handle the error
        console.error('Error fetching data:', error);
        this.error = 'Error fetching data!';
      }
     //  Write code here for print the message error
    );
  }
}
