import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ClientService } from 'src/app/services/client.service';
import { NgForm } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';
import { Cliente } from 'src/app/models/cliente';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  producto=new Producto();
  clientes:any[]=[];
  pedido=new Pedido();
  id:string;
  idProducto:number;
  constructor(private route:ActivatedRoute,private servicio:ClientService,private router:Router ) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.idProducto=parseInt(this.id);
    this.getProducto();
    this.getClientes();
  }
  getProducto(){
  this.servicio.getProducto(this.idProducto).subscribe((produc:Producto)=>{
    console.log(produc);
    this.producto=produc;

  });
  }
  guardar(form:NgForm) {
    //console.log(this.producto);
    console.log("pedidos");
    console.log(this.pedido.idCliente);
    this.pedido.idProducto=this.idProducto;
    console.log(this.pedido.idProducto);
    console.log(this.pedido.cantidad);
    console.log(this.pedido.talle);
    console.log(this.pedido.fechaPedido);
    this.pedido.costoTotal=this.producto.precioXUnid*this.pedido.cantidad;
    console.log(this.pedido.costoTotal);
    this.servicio.insertPedido(this.pedido).subscribe(datos => {
      console.log("se ha cargado correctamente");  
      this.router.navigate(['/verPedido',this.pedido.idProducto]);
      
    });
  }
  getClientes(){
    this.servicio.getClientes().subscribe((data:any)=>{
      console.log(data);
      this.clientes=data;
    })
  }

}
