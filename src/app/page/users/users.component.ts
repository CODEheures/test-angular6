import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users/user';
import { UsersService } from '../../models/users/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[]
  public msgError: string
  public selectedId: number

  constructor(private _usersService: UsersService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'), 10)
    })
    this._usersService.getUsers()
    .subscribe(data => this.users = data,
               error => this.msgError = error)
  }

  isSelected(id: number) {
    return id === this.selectedId
  }

}
