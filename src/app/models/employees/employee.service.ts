import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url)
                    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'server error')
  }
}
