import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component'; 
import { AddTaskComponent } from './add-task/add-task.component';

export const routes: Routes = [
    { path: '', component: TaskListComponent },  // Standardseite (Aufgabenliste)
    { path: 'add-task', component: AddTaskComponent },  // Seite für neue Aufgabe
    { path: 'task-list', component: TaskListComponent }
];
