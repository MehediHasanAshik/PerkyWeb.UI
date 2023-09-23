import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { EmployeeListComponent } from './Components/Features/Employees/employee-list/employee-list.component';
import { EmployeeAddComponent } from './Components/Features/Employees/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './Components/Features/Employees/employee-update/employee-update.component';
import { FormsModule } from '@angular/forms';
import { DepartmentListComponent } from './Components/Features/Departments/department-list/department-list.component';
import { PositionListComponent } from './Components/Features/Positions/position-list/position-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    DepartmentListComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
