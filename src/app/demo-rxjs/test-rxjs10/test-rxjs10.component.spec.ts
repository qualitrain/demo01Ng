import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs10Component } from './test-rxjs10.component';

describe('TestRxjs10Component', () => {
  let component: TestRxjs10Component;
  let fixture: ComponentFixture<TestRxjs10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
