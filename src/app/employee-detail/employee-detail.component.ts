import { Component } from '@angular/core';
import { MasterService } from '../services/master.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent {
  employee: any;

  constructor(
    private masterService: MasterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.masterService
      .getEmployeeDetail(id)
      .subscribe((res) => (this.employee = res));
  }
}
