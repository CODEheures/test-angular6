import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './page/users/users.component';
import { TodosComponent } from './page/todos/todos.component';
import { HomeComponent } from './page/home/home.component';
import { Page404Component } from './page/page404/page404.component';
import { UserComponent } from './page/user/user.component';
import { AddressComponent } from './page/address/address.component'

const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  {
    path: 'users/:id',
    component: UserComponent,
    children: [
      { path: 'address', component: AddressComponent}
    ]
  },
  { path: 'todos', component: TodosComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Page404Component, HomeComponent, UsersComponent, UserComponent, AddressComponent, TodosComponent]
