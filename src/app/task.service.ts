import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];  // Task Liste

  constructor() {}

  getTasks() {
    return this.tasks;  // Rückgabe aller Aufgaben
  }

  addTask(task: Task) {
    this.tasks.push(task);  // Aufgabe zur Liste hinzufügen
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed; // Status der Aufgabe umschalten
    }
  }
}
