import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  form;

  // message to be display if Issue added or not
  message = '';
  // Form is created in html file and write code to make it functional using FormBuilder
  // Write logic to make all fields as mandatory

  constructor(private formBuilder: FormBuilder, private issueService: IssueService) {
    this.form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
  });

  }

  ngOnInit() {
  }

  // Implement onSubmit method to save a Issue, verify form is valid or not
  // Display message 'Title and Description should not be empty!!! Please verify details' if form is invalid
  // Display message 'Failed to add Issue!!' while error handling
  // Display message 'Issue added' if Issue is added
  onSubmit() {

    if (this.form.valid) {
      this.issueService.addIssue(this.form.value).subscribe(
        data => {
          this.message = 'Issue added';
          this.clearForm();
        },
        err => {
          this.message = 'Failed to add Issue!!';
        }
      );
    } else {
      this.message = 'Title and Description should not be empty!!! Please verify details';
    }
  }
  // clearForm method is to reset the form after submitting
  clearForm() {
    this.form.reset({
      title: '',
      description: ''
     });
  }

}
