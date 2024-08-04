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

  // test to Check if Issue component exists
  it('should create', () => {
    expect(component).toBeTruthy();
    
  });

  // test to check onSubmit method existence
  it('onSubmit() should exists', () => {
    expect(component.onSubmit).toBeDefined();
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeDefined();
  });

  // test to check clearForm method existence
  it('clearForm() should exists', () => {
    expect(component.clearForm).toBeDefined();
  });

  // test to check if title form field validates input correctly
  it('testing title field validity', () => {
    const titleControl = component.form.get('title');
    titleControl.setValue('Valid Title');
    expect(titleControl.valid).toBeTruthy();
  });


  // test to check if description form field validates input correctly
  it('testing description field validity', () => {
    const descriptionControl = component.form.get('description');
    descriptionControl.setValue('Valid Description');
    expect(descriptionControl.valid).toBeTruthy();
  });

  // test to check onSubmit is calling IssueService or not
  it('onSubmit() should call IssueService to add a Issue', () => {
    const addIssueSpy = spyOn(issueService, 'addIssue').and.returnValue(of(''));

    component.form.setValue({
      title: 'Test Title',
      description: 'Test Description',
    });

    component.onSubmit();

    expect(addIssueSpy).toHaveBeenCalledWith({
      title: 'Test Title',
      description: 'Test Description',
    });     
    });
});
