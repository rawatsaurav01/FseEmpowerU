import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  error(error: any) {
    throw new Error('Method not implemented.');
  }
  post: Post = { userId:2, id:2, title: 'Mock Data', body: 'Lorem body' };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.post = data;
      console.log(data.userId);
    });
  }

}
