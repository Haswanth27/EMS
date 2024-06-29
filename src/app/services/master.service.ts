import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  pattern = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
  constructor(private http: HttpClient) {}
  apiUrl = '/api/employees/';
  getAllEmployees() {
    return this.http.get(this.apiUrl);
  }
  getEmployeeDetail(id: any) {
    return this.http.get(this.apiUrl + id);
  }
  createEmployee(employee: any) {
    return this.http.post(this.apiUrl, employee);
  }
  updateEmployee(employee: any, id: any) {
    return this.http.put(this.apiUrl + employee.id, employee);
  }
  deleteEmployee(id: any) {
    return this.http.delete(this.apiUrl + id);
  }
}
