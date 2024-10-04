import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  constructor(private router: Router) {}

  login() {
    if (this.ci === 123456 && this.password === 'password123') {
     this.router.navigate(['/menu']);
    } else {
      alert('Incorrect credentials');
    }
}
}
