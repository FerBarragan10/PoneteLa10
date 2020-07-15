import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagClientesComponent } from './pag-clientes.component';

describe('PagClientesComponent', () => {
  let component: PagClientesComponent;
  let fixture: ComponentFixture<PagClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
