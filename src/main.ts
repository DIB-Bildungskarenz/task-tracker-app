//import von bootstrap,appconfig und appcomponent
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//startet angular anwedung, falls fehler beim starten dann error
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
