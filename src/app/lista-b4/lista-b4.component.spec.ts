import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaB4Component } from './lista-b4.component';

describe('ListaB4Component', () => {
  let component: ListaB4Component;
  let fixture: ComponentFixture<ListaB4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaB4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaB4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
