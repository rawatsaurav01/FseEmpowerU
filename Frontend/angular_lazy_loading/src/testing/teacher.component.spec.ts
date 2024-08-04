import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { TeacherComponent } from 'src/app/teacher/teacher.component';

describe('TeacherComponent', () => {
  let component: TeacherComponent;
  let fixture: ComponentFixture<TeacherComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch teachers data on initialization', () => {
    const mockTeachers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    spyOn(apiService, 'get').and.returnValue(of(mockTeachers));

    fixture.detectChanges();

    expect(apiService.get).toHaveBeenCalledWith('teachers');
    expect(component.teachers).toEqual(mockTeachers);
  });
});
