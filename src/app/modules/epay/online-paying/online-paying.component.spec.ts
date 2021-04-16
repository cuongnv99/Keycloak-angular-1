import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePayingComponent } from './online-paying.component';

describe('OnlinePayingComponent', () => {
  let component: OnlinePayingComponent;
  let fixture: ComponentFixture<OnlinePayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
