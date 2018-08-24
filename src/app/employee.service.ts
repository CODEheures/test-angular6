import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {id: 1, name: 'jean', age: 18},
      {id: 2, name: 'paul', age: 24},
      {id: 3, name: 'matteo', age: 8},
      {id: 4, name: 'zia', age: 35}
    ]
  }
}
