import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-pag-pedidos',
  templateUrl: './pag-pedidos.component.html',
  styleUrls: ['./pag-pedidos.component.scss']
})
export class PagPedidosComponent implements OnInit {
pedidos:any[]=[];
  constructor(private servicio:ClientService) { }

  ngOnInit() {
    this.getPedidos();
  }
  getPedidos(){
    this.servicio.getPedidos().subscribe((data:any)=>{
      console.log(data);
      this.pedidos=data;
    })
  }
}
