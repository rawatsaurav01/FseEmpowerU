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
    expect(service).toBeTruthy();
  });

 // testing service for addIssue method
 it('addIssue() method should add issue', () => {
  const issue: Issue = {
    title: 'testin',
    description: 'This is the description of the testin issue'
  };

  // We call the service
  service.addIssue(issue).subscribe((response) => {
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('http://localhost:3000/issues');

    // Then we set the fake data to be returned by the mock
    expect(req.request.method).toBe('POST');
    req.flush({}); // You can adjust this based on your API response

    // Assert that the service made the correct request
    expect(req.request.method).toBe('POST');
  });
});

  // testing service for getIssues method
  it('getIssues() method should get all issues', () => {
    // We call the service
    service.getIssues().subscribe((response) => {
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/issues');

      // Then we set the fake data to be returned by the mock
      expect(req.request.method).toBe('GET');
      req.flush(issues); // Assuming 'issues' is the expected data

      // Assert that the service made the correct request
      expect(req.request.method).toBe('GET');
    });
  });

    // testing service for deleteIssue method
    it('deleteIssue() method should delete issue', () => {
      const issueId = '123';
  
      // We call the service
      service.deleteIssue(issueId).subscribe((response) => {
        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne(`http://localhost:3000/issues/${issueId}`);
  
        // Then we set the fake data to be returned by the mock
        expect(req.request.method).toBe('DELETE');
        req.flush({}); // You can adjust this based on your API response
  
        // Assert that the service made the correct request
        expect(req.request.method).toBe('DELETE');
      });
    });
  
    // Clean up: ensure that there are no outstanding requests after each test
    afterEach(() => {
      httpMock.verify();
    });

  afterEach( () => {
       httpMock.verify();
    });
});
