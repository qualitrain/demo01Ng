import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplErrorComponent } from './despl-error.component';

describe('DesplErrorComponent', () => {
  let component: DesplErrorComponent;
  let fixture: ComponentFixture<DesplErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesplErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesplErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
