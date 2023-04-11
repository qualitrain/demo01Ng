import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmID04Component } from './ejm-id04.component';

describe('EjmID04Component', () => {
  let component: EjmID04Component;
  let fixture: ComponentFixture<EjmID04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmID04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmID04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
