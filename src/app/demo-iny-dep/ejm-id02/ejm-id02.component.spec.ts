import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmID02Component } from './ejm-id02.component';

describe('EjmID02Component', () => {
  let component: EjmID02Component;
  let fixture: ComponentFixture<EjmID02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmID02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmID02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
