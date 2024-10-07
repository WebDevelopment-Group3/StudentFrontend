import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrls = {
    student: 'http://localhost:5262/api/Student',
    grades: 'http://localhost:5266/api/Grades',
    tasks: 'http://localhost:5211/api/Task'
  };

  constructor(private http: HttpClient) {}

  loginStudent(ci: number, password: string): Observable<any> {
    return this.http.get(`${this.baseUrls.student}/login?ci=${ci}&password=${password}`);
  }

  getGrades(): Observable<any> {
    return this.http.get(this.baseUrls.grades);
  }
  
  getTasksByStudentId(studentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrls.tasks}/student/${studentId}`);
  }
}
