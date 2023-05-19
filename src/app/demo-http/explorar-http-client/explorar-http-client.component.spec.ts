import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarHttpClientComponent } from './explorar-http-client.component';

describe('ExplorarHttpClientComponent', () => {
  let component: ExplorarHttpClientComponent;
  let fixture: ComponentFixture<ExplorarHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorarHttpClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
