import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homeworks',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './homeworks.component.html',
  styleUrl: './homeworks.component.css'
})
export class HomeworksComponent implements OnInit {
  studentId: string | null = null;
  tasks: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const studentData = localStorage.getItem('studentData');
    
    if (studentData) {
      const student = JSON.parse(studentData);
      
      if (student && student.id) {
        this.studentId = student.id;
      } else {
        console.error('Student ID not found in studentData');
      }
    } else {
      console.error('No studentData found in localStorage');
    }

    if (this.studentId) {
      this.apiService.getTasksByStudentId(this.studentId).subscribe(
        (response) => {
          this.tasks = response;
        },
        (error) => {
          console.error('Error fetching tasks:', error);
        }
      );
    } else {
      console.error('Student ID is empty');
    }
  }


  loadStudentTasks(): void {
    
    const studentData = localStorage.getItem('studentData');
    
    if (studentData) {
      this.studentId = JSON.parse(studentData).id; // Asume que 'id' es la propiedad que guarda el studentId

      // Llama al servicio de API para obtener las tareas del estudiante
      if (this.studentId != null)this.apiService.getTasksByStudentId(this.studentId).subscribe(
        (tasks) => {
          this.tasks = tasks; // Asigna las tareas a la propiedad
        },
        (error) => {
          console.error('Error al cargar las tareas', error);
        }
      );
    } else {
      console.error('No se encontró el ID del estudiante en localStorage');
    }
  }
}
