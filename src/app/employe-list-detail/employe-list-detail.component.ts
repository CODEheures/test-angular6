import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employe-list-detail',
  templateUrl: './employe-list-detail.component.html',
  styleUrls: ['./employe-list-detail.component.css']
})
export class EmployeListDetailComponent implements OnInit {

  public employes = []

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employes = this._employeeService.getEmployees()
  }

}
