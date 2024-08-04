import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of, throwError } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { DataComponent } from 'src/app/data/data.component';
describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    dataService = jasmine.createSpyObj('DataService', ['getData']);
    TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [{ provide: DataService, useValue: dataService }],
    });
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should load data successfully', () => {
    dataService.getData.and.returnValue(of('Mock data')); // Mock a successful response
    component.loadData();
    expect(component.data).toEqual('Mock data');
  });

  it('should handle error when loading data', () => {
    dataService.getData.and.returnValue(throwError('Error fetching data!')); // Mock an error response
    component.loadData();
    expect(component.error).toEqual('Error fetching data!');
  });
});
