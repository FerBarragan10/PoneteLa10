import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  productos:[]=[];
  constructor(private ClienteServ:ClientService) { }

  ngOnInit(): void {
    this.getClientes();
    this.getProductos();
  }

  getClientes(){
    this.ClienteServ.getClientes().subscribe(data=>{
      console.log(data);
    })
  }
  getProductos(){
    this.ClienteServ.getProductos().subscribe((data:any)=>{
      console.log(data);
      this.productos=data;
    })
  }
}