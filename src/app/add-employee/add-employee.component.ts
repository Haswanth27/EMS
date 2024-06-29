import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: '../shared/add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  employee = {
    id: null,
    name: '',
    location: '',
    email: '',
    mobile: '',
  };
  locs = ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
  path = '';
  constructor(private router: Router, private masterService: MasterService) {}
  ngOnInit() {
    this.path = this.router.url.includes('/addEmployee') ? 'add' : '';
  }

  onSubmit(formValues: any) {
    this.masterService.createEmployee(formValues).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
