import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListDetailComponent } from './employe-list-detail.component';

describe('EmployeListDetailComponent', () => {
  let component: EmployeListDetailComponent;
  let fixture: ComponentFixture<EmployeListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
