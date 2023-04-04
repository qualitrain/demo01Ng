import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs05Component } from './test-rxjs05.component';

describe('TestRxjs05Component', () => {
  let component: TestRxjs05Component;
  let fixture: ComponentFixture<TestRxjs05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
