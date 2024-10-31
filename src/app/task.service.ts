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
  private tasks: Task[] = [];
  private idCounter = 1;
  private storageKey = 'tasks';

  constructor() {
    // Lade Aufgaben aus localStorage
    const savedTasks = localStorage.getItem(this.storageKey);
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      // Setze den idCounter auf die höchste vorhandene ID + 1
      this.idCounter = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    } else {
      // Initialisiere Standardaufgaben, wenn keine gespeichert sind
      this.initializeDefaultTasks();
    }
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    task.id = this.idCounter++;
    this.tasks.push(task);
    this.saveTasks(); // Speichere die aktualisierte Liste in localStorage
  }

  toggleTaskCompletion(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks(); // Speichere nach Änderung des Status
    }
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.saveTasks(); // Speichere nach dem Löschen
  }

  private initializeDefaultTasks() {
    // Füge Standardaufgaben hinzu
    this.tasks.push(
      { id: this.idCounter++, title: 'Aufgabe 1', description: 'Beschreibung 1', completed: false },
      { id: this.idCounter++, title: 'Aufgabe 2', description: 'Beschreibung 2', completed: false }
    );
    this.saveTasks(); // Speichere diese Standardaufgaben in localStorage
  }

  // Methode zum Speichern der Aufgaben in localStorage
  private saveTasks() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }
}
