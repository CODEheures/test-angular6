import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from './user'

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.httpClient
                    .get<User[]>('https://jsonplaceholder.typicode.com/users')
                    .pipe(catchError(this.errorHandler));
    }


    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'server error')
    }
}
