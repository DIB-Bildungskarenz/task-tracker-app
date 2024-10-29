import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  standalone: true,  
  imports: [CommonModule, FormsModule]
})

export class AddTaskComponent {
  // Initialisiere die neue Aufgabe mit einem `completed`-Attribut
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService, private router: Router) {} //consturctor
    //hinzüfugen von toDos
  onSubmit() {
    this.task.id = Math.random();
    this.taskService.addTask(this.task);
    this.router.navigate(['/']);
    this.router.navigate(['/task-list']); // Wenn du eine solche Route definiert hast
  }
  
}

