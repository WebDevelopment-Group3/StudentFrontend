import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  standalone: true,
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  studentName = 'Jorge Rojas'; // Puedes ajustar esto si el nombre del estudiante viene del backend
  grades: any[] = []; // Inicializa el arreglo de calificaciones

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadGrades(); // Carga las calificaciones al inicializar el componente
  }

  loadGrades(): void {
    this.apiService.getGrades().subscribe(
      (data) => {
        this.grades = data; // Asigna los datos obtenidos a la variable grades
      },
      (error) => {
        console.error('Error al cargar las calificaciones', error);
      }
    );
  }
}
