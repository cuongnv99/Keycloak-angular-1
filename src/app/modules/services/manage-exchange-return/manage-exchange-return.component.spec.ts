import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExchangeReturnComponent } from './manage-exchange-return.component';

describe('ManageExchangeReturnComponent', () => {
  let component: ManageExchangeReturnComponent;
  let fixture: ComponentFixture<ManageExchangeReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExchangeReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExchangeReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
