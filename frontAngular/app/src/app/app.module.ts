import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { PagClientesComponent } from './componentes/pag-clientes/pag-clientes.component';
import { PagInicioComponent } from './componentes/pag-inicio/pag-inicio.component';
import { PagPedidosComponent } from './componentes/pag-pedidos/pag-pedidos.component';
import { CamisetasComponent } from './componentes/camisetas/camisetas.component';
import { BuzosComponent } from './componentes/buzos/buzos.component';
import { CamperasComponent } from './componentes/camperas/camperas.component';
import { GorrasComponent } from './componentes/gorras/gorras.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { PaginaImagenComponent } from './componentes/pagina-imagen/pagina-imagen.component';
import { DatosPedidoComponent } from './componentes/datos-pedido/datos-pedido.component';
import { PagVendedoresComponent } from './componentes/pag-vendedores/pag-vendedores.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    NavbarComponent,
    ProductoComponent,
    PedidoComponent,
    ClienteComponent,
    PagClientesComponent,
    PagInicioComponent,
    PagPedidosComponent,
    CamisetasComponent,
    BuzosComponent,
    CamperasComponent,
    GorrasComponent,
    PaginaImagenComponent,
    DatosPedidoComponent,
    PagVendedoresComponent,
    VendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
