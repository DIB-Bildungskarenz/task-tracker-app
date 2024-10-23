import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  // task-Objekt, wird nicht mehr benötigt
  // task: Task = { id: 0, title: '', description: '' };

  constructor(private taskService: TaskService, private router: Router) {}

  // Methode zum Hinzufügen einer neuen Aufgabe
  onSubmit(title: string, description: string) {
    const newTask: Task = { id: Math.random(), title, description }; // Neue Aufgabe erstellen
    this.taskService.addTask(newTask);  // Aufgabe hinzufügen
    this.router.navigate(['/']);  // Zurück zur Aufgabenliste navigieren
  }
}
