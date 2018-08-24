import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  public employes = []

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employes = this._employeeService.getEmployees()
  }

}