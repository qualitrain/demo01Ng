import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDemosBasicosComponent } from './lista-demos-basicos.component';

describe('ListaDemosBasicosComponent', () => {
  let component: ListaDemosBasicosComponent;
  let fixture: ComponentFixture<ListaDemosBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDemosBasicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDemosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
