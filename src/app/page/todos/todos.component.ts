import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../models/todos/todos.service';
import { Todo } from '../../models/todos/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[]
  public msgError: string

  constructor(private _todosService: TodosService) { }

  ngOnInit() {
    this._todosService.getTodos()
                      .subscribe(data => this.todos = data,
                                 error => this.msgError = error)
  }

}
