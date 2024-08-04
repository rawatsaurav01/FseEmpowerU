import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Post } from 'src/app/model/post';
import { DataDisplayComponent } from 'src/app/components/data-display/data-display.component';
import { DataService } from 'src/app/services/data.service';

const post: Post[] = [
  {
    userId: 1,
    id: 1,
    title: 'Test Title',
    body: "Test Body"
  },
  {
    userId: 2,
    id: 2,
    title: 'Title 2',
    body: "Test Body 2"
  }
];

describe('dataComponent', () => {
  let component: DataDisplayComponent;
  let fixture: ComponentFixture<DataDisplayComponent>;
  let service: DataService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule
      ],
      declarations: [ DataDisplayComponent ],
      providers: [DataService]
    })
    .compileComponents();
    service = TestBed.inject(DataService);
    spyOn(service, 'getData').and.returnValue(of(post));
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DataDisplayComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
