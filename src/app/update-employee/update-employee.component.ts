import { Component } from '@angular/core';
import { MasterService } from '../services/master.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: '../shared/add-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  employee: any;
  locs = ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
  constructor(
    private masterService: MasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  path = '';
  ngOnInit() {
    this.path = this.router.url.includes('/editEmployee') ? 'edit' : '';
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.masterService.getEmployeeDetail(id).subscribe((res) => {
      this.employee = res;
    });
  }

  onSubmit(formValues: any) {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    formValues.id = id;
    this.masterService.updateEmployee(formValues, id).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
