import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  todo = {
    name: '',
    description: '',
    completed: false,
  };

  constructor(private todoService: TodoService) {}

  createTodo(name: string, description: string, completed: boolean): void {
    const todo = { name, description, completed };
    this.todoService.createTodo(todo).subscribe(() => {
      window.alert('Todo created successfully!');
    });
  }
}
