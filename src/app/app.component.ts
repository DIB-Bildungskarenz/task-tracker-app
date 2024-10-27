import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //def. html sektor
  standalone: true, //komponente ist eigenständig,müssen keine module impo. werden
  imports: [RouterOutlet], //listet module
  templateUrl: './app.component.html', //html
  styleUrl: './app.component.css' //css
})
export class AppComponent {
  title = 'task-tracker-app'; //init. name der anwendung
}
