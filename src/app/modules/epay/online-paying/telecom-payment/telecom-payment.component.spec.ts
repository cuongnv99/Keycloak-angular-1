import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomPaymentComponent } from './telecom-payment.component';

describe('TelecomPaymentComponent', () => {
  let component: TelecomPaymentComponent;
  let fixture: ComponentFixture<TelecomPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
