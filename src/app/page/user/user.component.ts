import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users/user';
import { UsersService } from '../../models/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User
  public msgError: string

  constructor(private _usersService: UsersService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._usersService.getUser(this._route.snapshot.paramMap.get('id'))
                      .subscribe(data => this.user = data,
                                 error => this.msgError = error)
  }

}
