import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component'; 
import { AddTaskComponent } from './add-task/add-task.component';

export const routes: Routes = [
    { path: '', redirectTo: '/task-list', pathMatch: 'full' },  // Standardseite
    { path: 'task-list', component: TaskListComponent },  // Seite für die Aufgabenliste
    { path: 'add-task', component: AddTaskComponent }  // Seite für neue Aufgabe
];
