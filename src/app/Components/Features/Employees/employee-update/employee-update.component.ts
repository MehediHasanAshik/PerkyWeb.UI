import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UpdateEmployee } from '../Models/Update-Employee.model';
import { EmployeeService } from '../Services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from '../Models/Employees.model';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employees?: Employees;

  getParamSubscription?: Subscription;
  getSingleEmployeeSubscription?: Subscription;
  updateEmployeeSubscription?: Subscription;
  deleteEmployeeSubscription?: Subscription;

  id: number = 0;
  displayAlert: boolean = false;
  isDeleted: boolean = false;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getParameter();
    this.loadSingleEmployeeData();
  }

  getParameter(): void {
    this.getParamSubscription = this.activatedRoute.paramMap.subscribe({
      next: param => {
        if (param) {
          const stringId = param.get('id');
          if (stringId != null && stringId != undefined) {
            this.id = Number.parseInt(stringId, 10);
          }
        }
      }
    })
  }

  loadSingleEmployeeData(): void {
    this.getSingleEmployeeSubscription = this.employeeService.getEmployeeById(this.id).subscribe({
      next: res => {
        this.employees = res;
        console.log(this.employees);

      },
      error: err => {
        console.log(err);
      }
    });
  }

  OnUpdate(): void {
    const updatedEmployee: UpdateEmployee = {
      firstName: this.employees?.firstName ?? '',
      lastName: this.employees?.lastName ?? '',
      dateOfBirth: this.employees?.dateOfBirth ?? new Date(),
      departmentId: this.employees?.departmentId ?? 0,
      positionId: this.employees?.positionId ?? 0
    };

    this.updateEmployeeSubscription = this.employeeService.updateEmployee(this.id, updatedEmployee).subscribe({
      next: res => {
        this.displayAlert = true;
        setTimeout(() => {
          this.displayAlert = false;
          this.router.navigate(['/admin/employees']);
        }, 2000);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  OnDelete(): void {
    this.deleteEmployeeSubscription = this.employeeService.deleteEmployee(this.id).subscribe({
      next: res => {
        this.isDeleted = true;
        setTimeout(() => {
          this.isDeleted = false;
          this.router.navigate(['/admin/employees']);
        }, 2000);
      },
      error: err => {
        console.log(err)
      }
    })
  }

  ngOnDestroy(): void {
    this.getParamSubscription?.unsubscribe();
    this.getSingleEmployeeSubscription?.unsubscribe();
    this.updateEmployeeSubscription?.unsubscribe();
    this.deleteEmployeeSubscription?.unsubscribe();
  }

}
