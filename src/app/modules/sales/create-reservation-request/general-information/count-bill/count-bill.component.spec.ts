import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBillComponent } from './count-bill.component';

describe('CountBillComponent', () => {
  let component: CountBillComponent;
  let fixture: ComponentFixture<CountBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
