import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmID01Component } from './ejm-id01.component';

describe('EjmID01Component', () => {
  let component: EjmID01Component;
  let fixture: ComponentFixture<EjmID01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmID01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmID01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
