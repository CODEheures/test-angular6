import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule, routingComponents } from './app-routing.module'

import { AppComponent } from './app.component'
import { TestComponent } from './components/test/test.component'
import { EmployeListComponent } from './components/employe-list/employe-list.component';
import { EmployeListDetailComponent } from './components/employe-list-detail/employe-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeListComponent,
    EmployeListDetailComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
