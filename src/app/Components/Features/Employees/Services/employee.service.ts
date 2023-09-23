import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../Models/Employees.model';
import { environment } from 'src/environments/environment';
import { AddEmployee } from '../Models/Add-Employee.model';
import { UpdateEmployee } from '../Models/Update-Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${environment.baseUrl}/api/employees`);
  }

  createEmployee(model: AddEmployee): Observable<Employees> {
    return this.http.post<Employees>(`${environment.baseUrl}/api/employees`, model)
  }

  getEmployeeById(id: number): Observable<Employees> {
    return this.http.get<Employees>(`${environment.baseUrl}/api/employees/${id}`)
  }

  updateEmployee(id: number, updatedEmployee: UpdateEmployee): Observable<Employees> {
    return this.http.put<Employees>(`${environment.baseUrl}/api/employees/${id}`, updatedEmployee);
  }

  deleteEmployee(id: number): Observable<Employees> {
    return this.http.delete<Employees>(`${environment.baseUrl}/api/employees/${id}`)
  }

  searchEmployeeName(searchedKey: string): Observable<Employees> {
    return this.http.get<Employees>(`${environment.baseUrl}/api/employees/search?name=${searchedKey}`);
  }
}
