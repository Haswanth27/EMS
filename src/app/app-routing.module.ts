import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';

const appRoutes: Routes = [
  { path: 'employees/addEmployee', component: AddEmployeeComponent },
  { path: 'employees/editEmployee/:id', component: UpdateEmployeeComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'employees', component: AllEmployeesComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
