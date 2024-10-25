import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();  // Aufgaben aus dem Service holen
  }


  // Methode zum Umschalten des Status "erledigt" einer Aufgabe
  toggleCompleted(task: Task) {
    task.completed = !task.completed;  // Setze den Status auf das Gegenteil
    // Falls gewünscht, könnte man hier den Service anpassen, um den Status persistent zu speichern
  }
}
