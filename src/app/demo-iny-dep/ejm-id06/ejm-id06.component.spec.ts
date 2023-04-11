import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmID06Component } from './ejm-id06.component';

describe('EjmID06Component', () => {
  let component: EjmID06Component;
  let fixture: ComponentFixture<EjmID06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmID06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmID06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
