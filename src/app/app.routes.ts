import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { GradesComponent } from './components/grades/grades.component';
import { HomeworksComponent } from './components/homeworks/homeworks.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', 
    component: MenuComponent,  
    children: [
      { path: '', component: StudentInfoComponent }, 
      { path: 'students', component: StudentInfoComponent },
      { path: 'grades', component: GradesComponent },
      { path: 'homeworks', component: HomeworksComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }