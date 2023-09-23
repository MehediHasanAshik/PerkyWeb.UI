import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './Components/Features/Employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './Components/Features/Employees/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './Components/Features/Employees/employee-update/employee-update.component';
import { DepartmentListComponent } from './Components/Features/Departments/department-list/department-list.component';
import { PositionListComponent } from './Components/Features/Positions/position-list/position-list.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'admin/employees', component: EmployeeListComponent },
  { path: 'admin/employees/add', component: EmployeeAddComponent },
  { path: 'admin/employees/:id', component: EmployeeUpdateComponent },

  { path: 'admin/departments', component: DepartmentListComponent },
  { path: 'admin/positions', component: PositionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
