import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaImagenComponent } from './pagina-imagen.component';

describe('PaginaImagenComponent', () => {
  let component: PaginaImagenComponent;
  let fixture: ComponentFixture<PaginaImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
