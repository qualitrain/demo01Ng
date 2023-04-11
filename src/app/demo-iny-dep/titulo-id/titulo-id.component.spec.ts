import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TituloIDComponent } from './titulo-id.component';


describe('TituloIDComponent', () => {
  let component: TituloIDComponent;
  let fixture: ComponentFixture<TituloIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
