import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs02Component } from './test-rxjs02.component';

describe('TestRxjs02Component', () => {
  let component: TestRxjs02Component;
  let fixture: ComponentFixture<TestRxjs02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
