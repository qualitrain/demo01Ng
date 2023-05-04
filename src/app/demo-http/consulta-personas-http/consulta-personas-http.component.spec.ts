import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPersonasHttpComponent } from './consulta-personas-http.component';

describe('ConsultaPersonasHttpComponent', () => {
  let component: ConsultaPersonasHttpComponent;
  let fixture: ComponentFixture<ConsultaPersonasHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPersonasHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPersonasHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
