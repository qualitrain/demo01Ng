import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs17SchedulerComponent } from './test-rxjs17-scheduler.component';

describe('TestRxjs17SchedulerComponent', () => {
  let component: TestRxjs17SchedulerComponent;
  let fixture: ComponentFixture<TestRxjs17SchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs17SchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs17SchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
