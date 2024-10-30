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
  private idCounter = 1; // ID-Zähler für neue Aufgaben


  constructor() {
    // Initialisiere die Aufgaben nur, wenn die Liste leer ist
    if (this.tasks.length === 0) {
      this.tasks.push(
        { id: this.idCounter++, title: 'Aufgabe 1', description: 'Beschreibung 1', completed: false },
        { id: this.idCounter++, title: 'Aufgabe 2', description: 'Beschreibung 2', completed: false }
      );
    }
  }

  getTasks() {
    return this.tasks;  // Rückgabe aller Aufgaben
  }

  addTask(task: Task) {
    task.id = this.idCounter++;
    this.tasks.push(task);  // Aufgabe zur Liste hinzufügen
  }

  toggleTaskCompletion(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed; // Status der Aufgabe umschalten
    }
  }
  // Neue Methode zum Löschen einer Aufgabe
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}
