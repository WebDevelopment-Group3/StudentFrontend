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
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.email === 'user@example.com' && this.password === 'password123') {
      //this.isLoggedIn = true;
      //localStorage.setItem('isLoggedIn', 'true');
      
     
    } else {
      alert('Incorrect credentials');
    }
}
}
