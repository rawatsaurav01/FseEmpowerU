import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DataDisplayComponent } from './data-display.component';
import { DataService } from 'src/app/services/data.service';
import { Post } from 'src/app/model/post';
import { delay, of, throwError } from 'rxjs';

describe('DataDisplayComponent', () => {
  let component: DataDisplayComponent;
  let fixture: ComponentFixture<DataDisplayComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['getData']);

    TestBed.configureTestingModule({
      declarations: [DataDisplayComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
    });

    fixture = TestBed.createComponent(DataDisplayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data from the service', fakeAsync(() => {
    const testData: Post = { userId: 1, id: 1, title: 'Mock Data', body: 'Lorem body' };
    dataServiceSpy.getData.and.returnValue(of(testData));

    fixture.detectChanges();

    tick(); // Wait for asynchronous operations to complete

    const element: HTMLElement = fixture.nativeElement;

    // Check if the template renders the expected user information
    expect(element.querySelector('h1')?.textContent).toContain('Data Received from JsonPlace Holder:');
    expect(element.querySelector('p:nth-child(2)')?.textContent).toContain(`User Id: ${testData.userId}`);
    expect(element.querySelector('p:nth-child(3)')?.textContent).toContain(`Title: ${testData.title}`);
    expect(element.querySelector('p:nth-child(4)')?.textContent).toContain(`Body: ${testData.body}`);


  }));

  it('should handle error from the service gracefully', fakeAsync(() => {
    dataServiceSpy.getData.and.returnValue(throwError('Error'));

    fixture.detectChanges(); // Trigger ngOnInit

    tick(); // Wait for asynchronous operations to complete

    // Ensure that the component handles the error gracefully, e.g., by not updating the post or showing an error message.
    expect(component.post).toEqual({ userId: 2, id: 2, title: 'Mock Data', body: 'Lorem body' });

    expect(component.post).toEqual({ userId: 2, id: 2, title: 'Mock Data', body: 'Lorem body' });
    expect(component.error).toBe('Error loading data');

  }));

  it('should update data after a delay', fakeAsync(() => {
    const testData: Post = { userId: 1, id: 1, title: 'Updated Data', body: 'Updated body' };
    dataServiceSpy.getData.and.returnValue(of(testData));

    fixture.detectChanges(); // Trigger ngOnInit

    tick(1000); // Simulate a delay of 1000 milliseconds

    expect(component.post).toEqual(testData);
  }));

  it('should handle asynchronous data retrieval', fakeAsync(() => {
    const testData: Post = { userId: 1, id: 1, title: 'Async Data', body: 'Async body' };
    dataServiceSpy.getData.and.returnValue(of(testData).pipe(delay(1000))); // Simulate an asynchronous delay

    fixture.detectChanges(); // Trigger ngOnInit

    expect(component.post).toEqual({ userId: 2, id: 2, title: 'Mock Data', body: 'Lorem body' });

    tick(1000); // Wait for asynchronous operations to complete

    expect(component.post).toEqual(testData);
  }));
});

