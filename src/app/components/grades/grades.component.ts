import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  standalone: true,
  imports : [CommonModule],
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  studentName: string = '';
  grades: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadGrades();
  }

  loadGrades(): void {
    this.apiService.getGrades().subscribe(
      (data) => {
        this.studentName = data.studentName;
        this.grades = data;
      },
      (error) => {
        console.error('Error al cargar las calificaciones', error);
      }
    );
  }
}
