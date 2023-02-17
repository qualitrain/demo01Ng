import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs13Component } from './test-rxjs13.component';

describe('TestRxjs13Component', () => {
  let component: TestRxjs13Component;
  let fixture: ComponentFixture<TestRxjs13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
