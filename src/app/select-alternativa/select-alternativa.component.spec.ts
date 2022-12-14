import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAlternativaComponent } from './select-alternativa.component';

describe('SelectAlternativaComponent', () => {
  let component: SelectAlternativaComponent;
  let fixture: ComponentFixture<SelectAlternativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAlternativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAlternativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
