import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Issue } from 'src/app/models/Issue';
import { IssueService } from 'src/app/services/issue.service';
import { ReactiveFormsModule} from '@angular/forms';
import { IssueComponent } from './issue.component';


describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;
  let issueService: IssueService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, ReactiveFormsModule],
      declarations: [ IssueComponent ],
      providers: [IssueService]
    })
    .compileComponents();
    issueService = TestBed.get(IssueService);
    spyOn(issueService, 'addIssue').and.returnValue(of(''));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test to Check if Issue component exists
  it('should create', () => {
    
  });

  // test to check onSubmit method existence
  it('onSubmit() should exists', () => {

  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {

  });

  // test to check clearForm method existence
  it('clearForm() should exists', () => {

  });

  // test to check if title form field validates input correctly
  it('testing title field validity', () => {

  });


  // test to check if description form field validates input correctly
  it('testing description field validity', () => {

  });

  // test to check onSubmit is calling IssueService or not
  it('onSubmit() should call IssueService to add a Issue', () => {
      
    });
});
