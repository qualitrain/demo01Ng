import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs04Component } from './test-rxjs04.component';

describe('TestRxjs04Component', () => {
  let component: TestRxjs04Component;
  let fixture: ComponentFixture<TestRxjs04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
