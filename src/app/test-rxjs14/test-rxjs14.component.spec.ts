import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs14Component } from './test-rxjs14.component';

describe('TestRxjs14Component', () => {
  let component: TestRxjs14Component;
  let fixture: ComponentFixture<TestRxjs14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
