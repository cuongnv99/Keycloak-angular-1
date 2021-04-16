import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAccordingToStockComponent } from './inventory-according-to-stock.component';

describe('InventoryAccordingToStockComponent', () => {
  let component: InventoryAccordingToStockComponent;
  let fixture: ComponentFixture<InventoryAccordingToStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAccordingToStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAccordingToStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
