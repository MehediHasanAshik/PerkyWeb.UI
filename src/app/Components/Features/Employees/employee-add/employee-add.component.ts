import { Component, OnInit } from '@angular/core';
import { AddEmployee } from '../Models/Add-Employee.model';
import { EmployeeService } from '../Services/employee.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  model: AddEmployee;
  addEmployeeSubscription?: Subscription;
  displayAlert: boolean = false;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.model = {
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      departmentId: 0,
      positionId: 0
    }
  }

  ngOnInit(): void {

  }

  OnSubmit() {
    this.employeeService.createEmployee(this.model).subscribe({
      next: res => {
        this.displayAlert = true;
        setTimeout(() => {
          this.displayAlert = false;
          this.router.navigate(['/admin/employees']);
        }, 2000);
      }
    })
  }

}
