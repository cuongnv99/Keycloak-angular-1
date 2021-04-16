import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationRequestComponent } from './create-reservation-request.component';

describe('CreateReservationRequestComponent', () => {
  let component: CreateReservationRequestComponent;
  let fixture: ComponentFixture<CreateReservationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReservationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
