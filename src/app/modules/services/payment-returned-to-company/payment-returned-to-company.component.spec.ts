import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReturnedToCompanyComponent } from './payment-returned-to-company.component';

describe('PaymentReturnedToCompanyComponent', () => {
  let component: PaymentReturnedToCompanyComponent;
  let fixture: ComponentFixture<PaymentReturnedToCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReturnedToCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReturnedToCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
