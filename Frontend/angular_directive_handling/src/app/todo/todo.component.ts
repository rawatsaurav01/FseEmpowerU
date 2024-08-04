import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoList: Todo[] = [];
  constructor() { }

 ngOnInit() {
 }
 // write logic to the onAddTodo method is to add a new todo to list
 // get maximum id in list and assign maximum id plus one while adding a todo
 onAddTodo(todoText: any) {
  if (todoText.trim() !== '') {
    const newTodo: Todo = {
      todoId: this.getMaxTodoId() + 1,
      text: todoText,
      isCompleted: false
    };
    this.todoList.push(newTodo);
  }
 }

 // write logic to the onClearTodos method to delete the all todos in the todoList
 onClearTodos() {
  this.todoList = [];
 }

 // write logic to method onCompletingTask, to mark todo as as completed or not
 onCompletingTodo(todo: Todo) {
  todo.isCompleted = !todo.isCompleted;
 }

 // write logic to method onDeletingTask, to delete the todo
 onDeletingTodo(todoId:any) {
  this.todoList = this.todoList.filter(todo => todo.todoId !== todoId);
 }

 private getMaxTodoId(): number {
  if (this.todoList.length === 0) {
    return 0;
  }
  return this.todoList.reduce((maxId, todo) => (todo.todoId > maxId ? todo.todoId : maxId), 0);
}

}
