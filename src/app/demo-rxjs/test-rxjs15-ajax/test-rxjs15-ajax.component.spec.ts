import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs15AjaxComponent } from './test-rxjs15-ajax.component';

describe('TestRxjs15AjaxComponent', () => {
  let component: TestRxjs15AjaxComponent;
  let fixture: ComponentFixture<TestRxjs15AjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRxjs15AjaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs15AjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
