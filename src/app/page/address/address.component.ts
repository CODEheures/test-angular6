import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users/user';
import { UsersService } from '../../models/users/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public user: User
  public msgError: string

  constructor(private _usersService: UsersService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.parent.paramMap.subscribe((params: ParamMap) => {
      this._usersService.getUser(params.get('id'))
                        .subscribe(data => this.user = data,
                                    error => this.msgError = error)
    })
  }

}
