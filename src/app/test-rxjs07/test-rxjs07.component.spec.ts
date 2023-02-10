import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs07Component } from './test-rxjs07.component';

describe('TestRxjs07Component', () => {
  let component: TestRxjs07Component;
  let fixture: ComponentFixture<TestRxjs07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
