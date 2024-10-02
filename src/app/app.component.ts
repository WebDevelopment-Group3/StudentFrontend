import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { HomeworksComponent } from './components/homeworks/homeworks.component';
import { GradesComponent } from './components/grades/grades.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentInfoComponent,HomeworksComponent,GradesComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentView: string = 'info';

  switchView(view: string) {
    this.currentView = view;
  }
}
