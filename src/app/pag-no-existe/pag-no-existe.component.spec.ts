import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagNoExisteComponent } from './pag-no-existe.component';

describe('PagNoExisteComponent', () => {
  let component: PagNoExisteComponent;
  let fixture: ComponentFixture<PagNoExisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagNoExisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagNoExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
