import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs12BComponent } from './test-rxjs12-b.component';

describe('TestRxjs12BComponent', () => {
  let component: TestRxjs12BComponent;
  let fixture: ComponentFixture<TestRxjs12BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs12BComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs12BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
