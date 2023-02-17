import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs12Component } from './test-rxjs12.component';

describe('TestRxjs12Component', () => {
  let component: TestRxjs12Component;
  let fixture: ComponentFixture<TestRxjs12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
