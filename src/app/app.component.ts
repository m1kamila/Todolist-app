import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Todo';
  todos: Array<{ id: number; name: string; description: string; completed: boolean }> = [];

  // Create a new todo
  createTodo(name: string, description: string, completed: boolean): void {
    const newTodo = {
      id: this.todos.length + 1,
      name,
      description,
      completed,
    };
    this.todos.push(newTodo);
  }

  // Delete a todo by ID
  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
