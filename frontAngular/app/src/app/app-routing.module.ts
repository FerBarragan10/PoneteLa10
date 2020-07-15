import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  CatalogoComponent}   from'./componentes/catalogo/catalogo.component';
import { ProductoComponent} from './componentes/producto/producto.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { PagClientesComponent} from './componentes/pag-clientes/pag-clientes.component'
import { PagInicioComponent } from './componentes/pag-inicio/pag-inicio.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { PagPedidosComponent } from './componentes/pag-pedidos/pag-pedidos.component';
import { CamisetasComponent } from './componentes/camisetas/camisetas.component';
import { BuzosComponent } from './componentes/buzos/buzos.component';
import { CamperasComponent } from './componentes/camperas/camperas.component';
import { GorrasComponent } from './componentes/gorras/gorras.component';
import { PaginaImagenComponent } from './componentes/pagina-imagen/pagina-imagen.component';

const routes: Routes = [
  {
    path:'MostrarCatalogo',
    component:CatalogoComponent
  },
  {
    path:'',
    component:PagInicioComponent
  },
  {
    path:'PagInicio',
    component:PagInicioComponent
  },
  {
    path:'agregarProducto',
    component:ProductoComponent
  },
  {
    path:'agregarCliente',
    component:ClienteComponent
  },
  {
    path:'MostrarClientes',
    component:PagClientesComponent
  },
  {
    path:'agregarPedido',
    component:PedidoComponent
  },
  {
    path:'MostrarPedidos',
    component:PagPedidosComponent
  },
  {
    path:'MostrarCamisetas',
    component:CamisetasComponent
  },
  {
    path:'MostrarBuzos',
    component:BuzosComponent
  },
  {
    path:'MostrarCamperas',
    component:CamperasComponent
  },
  {
    path:'MostrarGorras',
    component:GorrasComponent
  },
  {
    path:'verProducto/:id',
    component:PaginaImagenComponent
  }


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
