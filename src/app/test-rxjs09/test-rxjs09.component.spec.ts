import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs09Component } from './test-rxjs09.component';

describe('TestRxjs09Component', () => {
  let component: TestRxjs09Component;
  let fixture: ComponentFixture<TestRxjs09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
