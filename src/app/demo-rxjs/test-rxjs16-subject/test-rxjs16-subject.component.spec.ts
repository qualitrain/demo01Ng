import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs16SubjectComponent } from './test-rxjs16-subject.component';

describe('TestRxjs16SubjectComponent', () => {
  let component: TestRxjs16SubjectComponent;
  let fixture: ComponentFixture<TestRxjs16SubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs16SubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs16SubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
