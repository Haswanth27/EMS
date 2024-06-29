import { Component } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css'],
})
export class AllEmployeesComponent {
  allEmpHeaders = [
    'Emp ID',
    'Name',
    'Location',
    'Email',
    'Mobile',
    'Edit',
    'Delete',
  ];
  filterText = '';
  filteredEmployees: any;
  allEmployees: any;
  constructor(private masterService: MasterService) {}
  ngOnInit() {
    this.masterService.getAllEmployees().subscribe((res) => {
      this.allEmployees = res;
      this.filteredEmployees = JSON.parse(JSON.stringify(this.allEmployees));
    });
  }
  onFilter(event: any) {
    this.filterText = event;
    this.filteredEmployees = this.allEmployees.filter((emp: any) =>
      emp?.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  deleteEmployee(id: any) {
    console.log(id);
    this.masterService.deleteEmployee(id).subscribe(() => {
      this.allEmployees = this.allEmployees.filter((emp: any) => emp.id !== id);
      this.filteredEmployees = JSON.parse(JSON.stringify(this.allEmployees));
    });
  }
}
