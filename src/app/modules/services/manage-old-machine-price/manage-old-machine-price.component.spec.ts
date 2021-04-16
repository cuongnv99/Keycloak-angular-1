import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOldMachinePriceComponent } from './manage-old-machine-price.component';

describe('ManageOldMachinePriceComponent', () => {
  let component: ManageOldMachinePriceComponent;
  let fixture: ComponentFixture<ManageOldMachinePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOldMachinePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOldMachinePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
