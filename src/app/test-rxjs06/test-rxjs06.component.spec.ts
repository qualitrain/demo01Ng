import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs06Component } from './test-rxjs06.component';

describe('TestRxjs06Component', () => {
  let component: TestRxjs06Component;
  let fixture: ComponentFixture<TestRxjs06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
