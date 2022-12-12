import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecColorComponent } from './selec-color.component';

describe('SelecColorComponent', () => {
  let component: SelecColorComponent;
  let fixture: ComponentFixture<SelecColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
