import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { StudentsComponent } from 'src/app/students/students.component';

// Define ApiServiceMock directly in the test file
class ApiServiceMock {
  getStudentsData() {
    // Return a mock Observable with some data
    return of([{ name: 'John', grade: 'A' }]);
  }

  getTeachersData() {
    // Return a mock Observable with some data
    return of([{ name: 'Teacher1', grade: 'B' }]);
  }
}

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  let apiServiceMock: ApiServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent],
      providers: [{ provide: ApiService, useClass: ApiServiceMock }],
    });

    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    apiServiceMock = TestBed.inject(ApiService) as any; // Casting to any because of the mock
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get students data on calling getStudentsData', () => {
    const mockData = [{ name: 'John', grade: 'A' }];
    spyOn(apiServiceMock, 'getStudentsData').and.returnValue(of(mockData));

    component.getStudentsData();

    expect(apiServiceMock.getStudentsData).toHaveBeenCalled();
    expect(component.data).toEqual(mockData);
  });

  it('should get teachers data on calling getTeachersData', () => {
    const mockData = [{ name: 'Teacher1', grade: 'B' }];
    spyOn(apiServiceMock, 'getTeachersData').and.returnValue(of(mockData));

    component.getTeachersData();

    expect(apiServiceMock.getTeachersData).toHaveBeenCalled();
    expect(component.data).toEqual(mockData);
  });
});
