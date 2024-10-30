import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AddTaskComponent } from './add-task/add-task.component'; // importiere hier, wenn nötig
import { TaskListComponent } from './task-list/task-list.component'; // importiere hier, wenn nötig


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTaskComponent, TaskListComponent], // Importiere RouterOutlet für die Navigation
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Korrigiere hier 'styleUrl' zu 'styleUrls'
})
export class AppComponent {
  title = 'Task-tracker-app'; // Initialisiere den Namen der Anwendung
}
