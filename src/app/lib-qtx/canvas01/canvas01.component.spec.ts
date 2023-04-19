import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas01Component } from './canvas01.component';

describe('Canvas01Component', () => {
  let component: Canvas01Component;
  let fixture: ComponentFixture<Canvas01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Canvas01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Canvas01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
