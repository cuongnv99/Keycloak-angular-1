import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillDifferentMonthComponent } from './create-bill-different-month.component';

describe('CreateBillDifferentMonthComponent', () => {
  let component: CreateBillDifferentMonthComponent;
  let fixture: ComponentFixture<CreateBillDifferentMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBillDifferentMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillDifferentMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
