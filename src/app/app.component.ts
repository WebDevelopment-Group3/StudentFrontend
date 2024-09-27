import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentView: string = 'info'; // valor inicial para mostrar la información del estudiante

  switchView(view: string) {
    this.currentView = view;
  }
}
