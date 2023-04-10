import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalIDComponent } from './principal-id.component';

describe('PrincipalIDComponent', () => {
  let component: PrincipalIDComponent;
  let fixture: ComponentFixture<PrincipalIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
