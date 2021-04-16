import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOnlinePayingComponent } from './manage-online-paying.component';

describe('ManageOnlinePayingComponent', () => {
  let component: ManageOnlinePayingComponent;
  let fixture: ComponentFixture<ManageOnlinePayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOnlinePayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOnlinePayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
