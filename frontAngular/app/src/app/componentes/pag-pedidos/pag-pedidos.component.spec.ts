import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPedidosComponent } from './pag-pedidos.component';

describe('PagPedidosComponent', () => {
  let component: PagPedidosComponent;
  let fixture: ComponentFixture<PagPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
