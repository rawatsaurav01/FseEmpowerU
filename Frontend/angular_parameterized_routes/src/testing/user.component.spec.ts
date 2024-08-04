// user.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { UserComponent } from 'src/app/user/user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockActivatedRoute: any;
  let mockUserService: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      params: of({ id: 1 }), // Mock params object with id = 1
    };

    mockUserService = {
      getUserById: jasmine
        .createSpy('getUserById')
        .and.returnValue(of({ id: 1, name: 'John Doe' })), // Mock getUserById to return a user object
    };

    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: UserService, useValue: mockUserService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch user data based on id parameter', () => {
    expect(component.user).toEqual({ id: 1, name: 'John Doe' });
    expect(mockUserService.getUserById).toHaveBeenCalledWith(1);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
