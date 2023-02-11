import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs08Component } from './test-rxjs08.component';

describe('TestRxjs08Component', () => {
  let component: TestRxjs08Component;
  let fixture: ComponentFixture<TestRxjs08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
