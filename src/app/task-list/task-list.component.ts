import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'] ,
  standalone: true,  
  imports: [CommonModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []; //array zum speichern der toDos

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();  //Holt ToDos und speichert in array
  }


  // Methode zum Umschalten des Status "erledigt" einer Aufgabe
  toggleCompleted(task: Task) {
    task.completed = !task.completed;  // Setze den Status auf das Gegenteil
    // Falls gewünscht, könnte man hier den Service anpassen, um den Status persistent zu speichern
  }
  // Methode zum Löschen einer Aufgabe
  deleteTask(task: Task) {
    const confirmed = confirm('Wirklich löschen?'); // Bestätigungsdialog
    if (confirmed) {
      this.taskService.deleteTask(task); // Aufgabe im Service löschen
      this.tasks = this.tasks.filter(t => t.id !== task.id); // Entferne die Aufgabe aus der Liste
    }
  }
}
