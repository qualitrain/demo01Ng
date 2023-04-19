import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainModHttpComponent } from './main-mod-http.component';

describe('MainModHttpComponent', () => {
  let component: MainModHttpComponent;
  let fixture: ComponentFixture<MainModHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainModHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainModHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
