import { Component, OnInit } from '@angular/core';
import { IssueService } from '../services/issue.service';
import { Issue } from '../models/Issue';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  content!: Issue[];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  this.issueService.getIssues().subscribe(
    data => {
      this.content = data;
    });
  }

  deleteIssue(value: any) {
    this.issueService.deleteIssue(value).subscribe(
     data => {
      this.ngOnInit();
     });
  }

}
