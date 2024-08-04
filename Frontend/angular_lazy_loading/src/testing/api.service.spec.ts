// shared/api.service.spec.ts
import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from 'src/app/api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should get data from the students API', inject(
    [ApiService, HttpTestingController],
    (service: ApiService, httpMock: HttpTestingController) => {
      const mockStudentData = [{ id: 1, name: 'John' }];

      service.get('students').subscribe((data) => {
        expect(data).toEqual(mockStudentData);
      });

      const req = httpMock.expectOne('http://localhost:3000/students');
      expect(req.request.method).toEqual('GET');

      req.flush(mockStudentData);
    }
  ));

  it('should get data from the teachers API', inject(
    [ApiService, HttpTestingController],
    (service: ApiService, httpMock: HttpTestingController) => {
      const mockTeacherData = [{ id: 1, name: 'Jane' }];

      service.get('teachers').subscribe((data) => {
        expect(data).toEqual(mockTeacherData);
      });

      const req = httpMock.expectOne('http://localhost:3000/teachers'); // Assuming teachers API endpoint
      expect(req.request.method).toEqual('GET');

      req.flush(mockTeacherData);
    }
  ));

  afterEach(inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      httpMock.verify();
    }
  ));
});
