import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCardCodeComponent } from './buy-card-code.component';

describe('BuyCardCodeComponent', () => {
  let component: BuyCardCodeComponent;
  let fixture: ComponentFixture<BuyCardCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCardCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCardCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
