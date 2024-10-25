import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
  // Initialisiere die neue Aufgabe mit einem `completed`-Attribut
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit(title: string, description: string) {
    this.task.id = Math.random();
    this.task.title = title;
    this.task.description = description;
    this.taskService.addTask(this.task);
    this.router.navigate(['/']);
  }
  
}

