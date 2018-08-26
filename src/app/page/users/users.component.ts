import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users/user';
import { UsersService } from '../../models/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[]
  public msgError: string

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers()
                      .subscribe(data => this.users = data,
                                 error => this.msgError = error)
  }

}
