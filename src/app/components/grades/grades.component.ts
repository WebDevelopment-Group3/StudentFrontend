import { Component } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  studentName = 'John Doe';
  grades = [
    { subject: 'Mathematics', firstTerm: '90', secondTerm: '85', participation: 'A', finalGrade: '88' },
    { subject: 'Science', firstTerm: '92', secondTerm: '89', participation: 'A-', finalGrade: '90' },
    { subject: 'History', firstTerm: '85', secondTerm: '87', participation: 'B+', finalGrade: '86' },
  ];
}
