import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../models/employees/employee.service';
import { Employee } from '../../models/employees/employee'

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  public employes: Employee[]
  public msgError: String

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employes = data,
               error => this.msgError = error)
  }

}
