import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs03Component } from './test-rxjs03.component';

describe('TestRxjs03Component', () => {
  let component: TestRxjs03Component;
  let fixture: ComponentFixture<TestRxjs03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
