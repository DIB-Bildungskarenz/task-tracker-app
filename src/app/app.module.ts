import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule importieren
import { RouterModule } from '@angular/router';
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
    FormsModule,  // FormsModule hier hinzufügen
    CommonModule, 
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
