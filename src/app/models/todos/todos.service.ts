import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Todo } from './todo'

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    constructor(private httpClient: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.httpClient
                .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
                .pipe(catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'server error')
    }
}
