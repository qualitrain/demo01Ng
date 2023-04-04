import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs01Component } from './test-rxjs01.component';

describe('TestRxjs01Component', () => {
  let component: TestRxjs01Component;
  let fixture: ComponentFixture<TestRxjs01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
