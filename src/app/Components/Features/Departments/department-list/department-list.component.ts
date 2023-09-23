import { DepartmentService } from './../Services/department.service';
import { Component, OnInit } from '@angular/core';
import { Department } from '../Models/Department.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Department[] = [];
  getAllDeptSubscription?: Subscription;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getAllDeptSubscription = this.departmentService.getAllDepartment().subscribe({
      next: res => {
        if (res) {
          this.departments = res;
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.getAllDeptSubscription?.unsubscribe();
  }


}
