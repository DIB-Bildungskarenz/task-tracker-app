import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule importieren
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';  // Importiere das Routing

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, // ngModel
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
