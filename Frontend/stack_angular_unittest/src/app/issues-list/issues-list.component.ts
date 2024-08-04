import { Component, OnInit } from '@angular/core';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  content: any;

  constructor(private issueService: IssueService) { }

  // Write logic to get all issues from IssueService
  ngOnInit() {
  // fetch all the issues details
  this.issueService.getIssues().subscribe(
    data => {
      this.content = data;
    });
  }

  // Implement deleteIssue method to delete the issue
  deleteIssue(value: any) {
    this.issueService.deleteIssue(value).subscribe(
     data => {
      this.ngOnInit();
     });
  }

}
