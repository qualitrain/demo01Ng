import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs11Component } from './test-rxjs11.component';

describe('TestRxjs11Component', () => {
  let component: TestRxjs11Component;
  let fixture: ComponentFixture<TestRxjs11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
