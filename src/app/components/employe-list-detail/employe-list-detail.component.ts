import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../models/employees/employee.service';

@Component({
  selector: 'app-employe-list-detail',
  templateUrl: './employe-list-detail.component.html',
  styleUrls: ['./employe-list-detail.component.css']
})
export class EmployeListDetailComponent implements OnInit {

  public employes = []
  public msgError: string

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employes = data,
               error => this.msgError = error)
  }

}
