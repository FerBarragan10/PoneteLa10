import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../models/producto';
import { Cliente } from '../models/cliente';
import { Pedido } from '../models/pedido';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getPedidos(){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/verPedido');
  }
  getCliente(id:number){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/cliente/'+id);
  }
  getClientes(){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/cliente');
  }
  getProductos(){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/producto');
  }
  getVendedores(){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/vendedor');
  }

  getTiposProductos(){
  return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/tipoProducto');
}

getMarcas(){
  return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/marca');
}
  insertProducto(producto:Producto){
    console.log(producto);
    return this.http.post('http://localhost/ponetela10/apiRestSistema/apiRest/api/producto',producto);
  }

  insertPedido(pedido:Pedido){
    console.log(pedido);
    return this.http.post('http://localhost/ponetela10/apiRestSistema/apiRest/api/pedido',pedido);
  }
  insertProveedor(proveedor:Proveedor){
    return this.http.post('http://localhost/ponetela10/apiRestSistema/apiRest/api/vendedor',proveedor);
  }
  agregaCliente(cliente:Cliente){
    console.log("llego aca");
    console.log(cliente);
    return this.http.post('http://localhost/ponetela10/apiRestSistema/apiRest/api/cliente',cliente);
  }
  getCamisetas(){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/camisetas');
  }
  getBuzos(){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/buzos');
  }
  getCamperas(){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/camperas');
  }
  getGorras(){
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/gorras');
  }
  getProducto(id:number){
    console.log(id);
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/producto/'+id);
  }
  verPedido(id:number){
    console.log(id);
    return this.http.get('http://localhost/ponetela10/apiRestSistema/apiRest/api/verPedido/'+id);
  }
}
