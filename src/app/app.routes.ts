import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'groups',
    component: TodoFormComponent
  },
  {
    path: 'group/:id',
    component: TodoListComponent
  }
];
