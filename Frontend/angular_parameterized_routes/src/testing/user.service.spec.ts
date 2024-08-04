import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from 'src/app/user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should retrieve users from the API via GET', () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];

    userService.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/users');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUsers);
  });

  it('should retrieve a user by ID from the API via GET', () => {
    const userId = 1;
    const mockUser = { id: userId, name: 'John Doe' };

    userService.getUserById(userId).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(
      `http://localhost:3000/users/${userId}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockUser);
  });
});
