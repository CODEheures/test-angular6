import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users/user';
import { UsersService } from '../../models/users/users.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User
  public msgError: string

  constructor(private _usersService: UsersService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this._usersService.getUser(this._route.snapshot.paramMap.get('id'))
                      .subscribe(data => this.user = data,
                                 error => this.msgError = error)
    })
  }

  goBack() {
    this._router.navigate(['/users', this.user.id - 1])
  }

  goNext() {
    this._router.navigate(['/users', this.user.id + 1])
  }

  returnToList() {
    this._router.navigate(['/users', {id: this.user.id}])
  }

  address() {
    this._router.navigate(['address'], {relativeTo: this._route})
  }

}
