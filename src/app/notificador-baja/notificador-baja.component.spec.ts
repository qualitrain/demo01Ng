import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificadorBajaComponent } from './notificador-baja.component';

describe('NotificadorBajaComponent', () => {
  let component: NotificadorBajaComponent;
  let fixture: ComponentFixture<NotificadorBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificadorBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificadorBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
