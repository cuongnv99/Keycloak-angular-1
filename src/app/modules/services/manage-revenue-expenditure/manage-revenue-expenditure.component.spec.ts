import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRevenueExpenditureComponent } from './manage-revenue-expenditure.component';

describe('ManageRevenueExpenditureComponent', () => {
  let component: ManageRevenueExpenditureComponent;
  let fixture: ComponentFixture<ManageRevenueExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRevenueExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRevenueExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
