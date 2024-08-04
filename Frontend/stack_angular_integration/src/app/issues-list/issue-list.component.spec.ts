import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { IssueService } from 'src/app/services/issue.service';
import { of } from 'rxjs';
import { IssuesListComponent } from './issues-list.component';

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;
  let issueService: IssueService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesListComponent ],
      imports: [HttpClientModule],
      providers: [ IssueService]

    })
    .compileComponents();
    issueService = TestBed.get(IssueService);
    spyOn(issueService, 'deleteIssue').and.returnValue(of(''));
    spyOn(issueService, 'getIssues').and.returnValue(of(''));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test to check if component exist
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeDefined();
  });

  // test to check deleteIssue is calling IssueService or not
  it('deleteIssue() should call IssueService to delete an Issue', () => {
    const deleteIssueSpy = spyOn(issueService, 'deleteIssue').and.returnValue(of(''));

    // Assuming a value is passed to deleteIssue, adjust accordingly based on your component's logic
    component.deleteIssue('issueId');

    expect(deleteIssueSpy).toHaveBeenCalledWith('issueId');
    });

  // test to check ngOnInit is calling IssueService or not
  it('ngOnInit() should call IssueService to ga Iet all Issues', () => {
    const getIssuesSpy = spyOn(issueService, 'getIssues').and.returnValue(of([]));

    component.ngOnInit();

    expect(getIssuesSpy).toHaveBeenCalled();   
  });
});
