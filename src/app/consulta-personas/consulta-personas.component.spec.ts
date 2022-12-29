import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPersonasComponent } from './consulta-personas.component';

describe('ConsultaPersonasComponent', () => {
  let component: ConsultaPersonasComponent;
  let fixture: ComponentFixture<ConsultaPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
