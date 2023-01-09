import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaDemoHostComponent } from './caja-demo-host.component';

describe('CajaDemoHostComponent', () => {
  let component: CajaDemoHostComponent;
  let fixture: ComponentFixture<CajaDemoHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaDemoHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaDemoHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
