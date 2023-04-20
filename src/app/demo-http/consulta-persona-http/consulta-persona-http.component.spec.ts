import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPersonaHttpComponent } from './consulta-persona-http.component';

describe('ConsultaPersonaHttpComponent', () => {
  let component: ConsultaPersonaHttpComponent;
  let fixture: ComponentFixture<ConsultaPersonaHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPersonaHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPersonaHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
