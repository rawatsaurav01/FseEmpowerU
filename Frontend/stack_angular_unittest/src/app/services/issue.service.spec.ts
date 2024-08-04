import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Issue } from 'src/app/models/Issue';
import { Observable } from 'rxjs';
import { IssueService } from './issue.service';

const issues: Issue[] = [
  {
    title: 'Issue in pom.xml',
    description: 'Avoid redundancy of dependencies'
  },
  {
    title: 'Implementaion in testing',
    description: 'Test all the scenarios'
  }
];
describe('IssueService', () => {
  let httpMock: HttpTestingController;
  let service: IssueService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssueService],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(IssueService);
  });

  // test to check if service exist
  it('should be created', () => {

  });

  // testing service for addIssue method
  it('addIssue() method should add issue', () => {
      const issue: Issue = {
        title: 'testin',
        description: 'This is description of testin issue'
      };
      // We call the service

      // We set the expectations for the HttpClient mock

      // Then we set the fake data to be returned by the mock

      });

  // testing service for getIssues method
  it('getIssues() method should get all issues', () => {
    // We call the service
    

    // We set the expectations for the HttpClient mock

    // Then we set the fake data to be returned by the mock

    });

    // testing service for deleteIssue method
  it('deleteIssue() method should delete issue', () => {
    // We call the service


    // We set the expectations for the HttpClient mock
    
    });

  afterEach( () => {
       httpMock.verify();
    });
});
