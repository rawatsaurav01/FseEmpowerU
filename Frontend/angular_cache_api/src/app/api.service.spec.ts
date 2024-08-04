import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { CacheService } from './cache.service';
import { StudentsComponent } from './students/students.component';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;
  let cacheServiceSpy: jasmine.SpyObj<CacheService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CacheService', ['get', 'set']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [StudentsComponent],
      providers: [ApiService, { provide: CacheService, useValue: spy }],
    });

    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    cacheServiceSpy = TestBed.inject(
      CacheService
    ) as jasmine.SpyObj<CacheService>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should get students data from cache', () => {
    const testData = [{ name: 'John', grade: 10 }];
    cacheServiceSpy.get.and.returnValue(testData);

    apiService.getStudentsData().subscribe((data) => {
      expect(data).toEqual(testData);
      expect(cacheServiceSpy.get).toHaveBeenCalledWith('StudentData');
    });
  });

  it('should get teachers data from cache', () => {
    const testData = [{ name: 'Jimmy', grade: 8 }];
    cacheServiceSpy.get.and.returnValue(testData);

    apiService.getTeachersData().subscribe((data) => {
      expect(data).toEqual(testData);
      expect(cacheServiceSpy.get).toHaveBeenCalledWith('TeacherData');
    });
  });
});
