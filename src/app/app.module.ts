import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientInMemoryWebApiModule,
  InMemoryWebApiModule,
} from 'angular-in-memory-web-api';
import { InmemorydbService } from './services/inmemorydb.service';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [AppComponent, AllEmployeesComponent, AddEmployeeComponent, UpdateEmployeeComponent, EmployeeDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InmemorydbService),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
