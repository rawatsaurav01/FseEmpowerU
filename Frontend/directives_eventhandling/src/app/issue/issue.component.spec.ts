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

  // test to check clearForm method existence
  it('clearForm() should exists', () => {
    expect(component.clearForm).toBeTruthy();
  });

  it('testing title field validity', () => {
    const title = component.form.controls.title;
    title.setValue('test');
    expect(title.valid).toBeTruthy();
  });

  it('testing description field validity', () => {
    const description = component.form.controls.description;
    description.setValue('description');
    expect(description.valid).toBeTruthy();
  });
    // test to check onSubmit is calling IssueService or not
  it('onSubmit() should call IssueService to add a Issue', () => {
      const issue: Issue = {
        id: 1,
        title: 'testin',
        description: 'This is description of testing issue'
      };

      const title = component.form.controls.title;
      title.setValue(issue.title);
      const description = component.form.controls.description;
      description.setValue(issue.description);
      component.onSubmit();
      expect(issueService.addIssue).toHaveBeenCalled();
      expect(component.message).toEqual('Issue added');
    });
});
