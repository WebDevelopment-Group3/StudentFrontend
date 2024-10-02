import { Component } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  standalone : true,
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  studentName = 'John Doe';
  educationLevel = 'High School';
  grade = '4to de secundaria';
  age = 15;
  gender = 'Male';
}
