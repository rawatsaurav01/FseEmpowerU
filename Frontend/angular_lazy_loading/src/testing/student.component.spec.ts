// student/student.component.spec.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { StudentComponent } from 'src/app/student/student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(waitForAsync(() => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['get']);

    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch students from ApiService on initialization', () => {
    const mockStudents = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    apiService.get.and.returnValue(of(mockStudents));

    fixture.detectChanges();

    expect(apiService.get).toHaveBeenCalledWith('students');
    expect(component.students).toEqual(mockStudents);
  });
});
