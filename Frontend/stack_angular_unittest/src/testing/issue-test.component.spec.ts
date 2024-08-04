import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Issue } from 'src/app/models/Issue';
import { IssueComponent } from 'src/app/issue/issue.component';
import { IssueService } from 'src/app/services/issue.service';


const issue: Issue[] = [
  {
    title: 'Issue 1',
    description: "Net issue"
  },
  {
    title: 'Issue 2',
    description: "Chrome issue"
  }
];

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;
  let service: IssueService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule
      ],
      declarations: [ IssueComponent ],
      providers: [IssueService]
    })
    .compileComponents();
    service = TestBed.inject(IssueService);
    spyOn(service, 'addIssue').and.returnValue(of(issue));
    spyOn(service, 'getIssues').and.returnValue(of(issue));
    spyOn(service, 'deleteIssue').and.returnValue(of(issue));
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  // TO check if component exist
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check onSubmit method existence
  it('onSubmit() should exists', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
});
