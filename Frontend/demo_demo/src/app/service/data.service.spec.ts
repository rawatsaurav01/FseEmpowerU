import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from 'src/app/service/data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should return data when successful', () => {
    spyOn(Math, 'random').and.returnValue(0.8); // Mock a successful response
    service.getData().subscribe((result) => {
      expect(result).toEqual('Mock data');
    });
  });

  it('should handle errors appropriately', () => {
    spyOn(Math, 'random').and.returnValue(0.3); // Mock an error response
    service.getData().subscribe(
      () => {},
      (error) => {
        expect(error).toEqual('Error fetching data!');
      }
    );
  });
});
