import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
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
}
