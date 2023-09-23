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
  searchedEmployees: Employees[] = [];
  searchedKey: string = '';
  searchedTrue: boolean = false;

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

  OnSearch(): void {
    if (this.searchedKey == null || this.searchedKey == "") {
      return;
    }
    this.employeeService.searchEmployeeName(this.searchedKey).subscribe({
      next: (res: any) => {
        if (res) {
          this.searchedEmployees = res;
          console.log(this.searchedEmployees);
          this.searchedTrue = true;
        }
      }, error: err => {
        console.log(err);
      }
    });
  }

  OnButtonClose(){
    this.searchedTrue = false;
  }

  ngDestroy(): void {
    this.getEmployeeSubscription?.unsubscribe();
  }

}
