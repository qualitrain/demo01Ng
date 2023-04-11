import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmID05Component } from './ejm-id05.component';

describe('EjmID05Component', () => {
  let component: EjmID05Component;
  let fixture: ComponentFixture<EjmID05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmID05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmID05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
