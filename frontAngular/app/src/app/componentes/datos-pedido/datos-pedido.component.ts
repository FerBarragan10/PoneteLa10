import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Pedido } from 'src/app/models/pedido';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.scss']
})
export class DatosPedidoComponent implements OnInit {
  producto=new Producto();
  clientes:any[]=[];
  cliente=new Cliente();
  pedido=new Pedido();
  id:string;
  idCli:string;
  idCliente:number;
  idProducto:number;

  constructor(private route:ActivatedRoute,private servicio:ClientService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.idProducto=parseInt(this.id);
    console.log(this.idProducto);
    console.log(this.idCli);
    this.getProducto();
    this.verPedido();
  }

  getProducto(){
    this.servicio.getProducto(this.idProducto).subscribe((produc:Producto)=>{
      console.log(produc);
      this.producto=produc;
  
    });
    }
    verPedido(){
      this.servicio.verPedido(this.idProducto).subscribe((pedido:Pedido)=>{
        console.log(pedido);
        this.pedido=pedido;  
        this.idCliente=this.pedido.idCliente;
        this.getCliente(this.idCliente);

      });
      }
      getCliente(idCliente:number){
        this.servicio.getCliente(this.idCliente).subscribe((client:Cliente)=>{
          console.log("cliente");
          console.log(client);
          this.cliente=client;
      
        });
      }

}
