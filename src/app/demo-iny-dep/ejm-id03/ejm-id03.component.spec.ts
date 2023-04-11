import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmID03Component } from './ejm-id03.component';

describe('EjmID03Component', () => {
  let component: EjmID03Component;
  let fixture: ComponentFixture<EjmID03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmID03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmID03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
