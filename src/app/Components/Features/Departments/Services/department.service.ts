import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../Models/Department.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDepartment(): Observable<Department[]>{
    return this.http.get<Department[]>(`${environment.baseUrl}/api/departments`)
  }
}
