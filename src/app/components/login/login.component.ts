import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ci: number | null = null;
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  studentData: any;

  constructor(private router: Router, private apiService: ApiService) {}

  login() {
    if (this.ci && this.password) {
      this.apiService.loginStudent(this.ci, this.password).subscribe(
        (response) => {
          // Verifica si la respuesta es válida
          if (response) {
            this.studentData = response; // Guarda la información del estudiante
            localStorage.setItem('studentData', JSON.stringify(this.studentData)); // Almacena en localStorage
            this.router.navigate(['/menu']); // Redirige al menú
          } else {
            alert('Incorrect credentials'); // Mensaje de error
          }
        },
        (error) => {
          alert('Error: ' + error.message); // Mensaje de error
        }
      );
    } else {
      alert('Complete all fields.'); // Verifica que los campos no estén vacíos
    }
  }
}
