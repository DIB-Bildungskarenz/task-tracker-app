import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

//funkcion bootstrap
const bootstrap = () => bootstrapApplication(AppComponent, config);
//export für verwendung in anderen datein
export default bootstrap;
