import { Component, OnInit } from '@angular/core';
import { Employees } from '../Models/Employees.model';
import { EmployeeService } from '../Services/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employees[] = [];

  getEmployeeSubscription?: Subscription;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeSubscription = this.employeeService.getAllEmployees().subscribe({
      next: res => {
        this.employees = res;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ngDestroy(): void {
    this.getEmployeeSubscription?.unsubscribe();
  }

}
