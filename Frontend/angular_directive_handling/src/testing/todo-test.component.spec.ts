import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from 'src/app/models/Todo';
import { TodoComponent } from 'src/app/todo/todo.component';


let todos:Todo[] =[{
  todoId : 1,
  text : "task1",
  isCompleted:false
  },{
  todoId : 2,
  text : "task2",
  isCompleted:false
}]

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});