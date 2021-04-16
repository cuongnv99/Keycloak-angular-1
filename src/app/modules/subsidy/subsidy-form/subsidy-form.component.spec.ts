import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidyFormComponent } from './subsidy-form.component';

describe('SubsidyFormComponent', () => {
  let component: SubsidyFormComponent;
  let fixture: ComponentFixture<SubsidyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsidyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsidyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
