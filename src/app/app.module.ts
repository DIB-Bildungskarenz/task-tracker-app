import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule importieren
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component'; // Relativer Pfad ohne 'src'
import { AddTaskComponent } from './add-task/add-task.component';
import { routes } from './app.routes';  // Importiere das Routing

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // ngModel
    CommonModule, //ngIf* ngFor*
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
