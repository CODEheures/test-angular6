import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { TestComponent } from './test/test.component'
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeListDetailComponent } from './employe-list-detail/employe-list-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeListComponent,
    EmployeListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
