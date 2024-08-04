import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataComponent } from 'src/app/data/data.component';
import { DataService } from 'src/app/service/data.service';


describe('DataComponent', () => {
    let component: DataComponent;
    let fixture: ComponentFixture<DataComponent>;
    let service: DataService;
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule
        ],
        declarations: [ DataComponent ],
        providers: [DataService]
      })
      .compileComponents();
      service = TestBed.inject(DataService);
    }));
  
    beforeEach(() => {
  
      fixture = TestBed.createComponent(DataComponent);
      component = fixture.componentInstance;
  
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

});