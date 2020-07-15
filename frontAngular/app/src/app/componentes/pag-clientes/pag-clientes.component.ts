import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-pag-clientes',
  templateUrl: './pag-clientes.component.html',
  styleUrls: ['./pag-clientes.component.scss']
})
export class PagClientesComponent implements OnInit {

  clientes:any[]=[];
  constructor(private servicio:ClientService) { }
  ngOnInit() {
    this.getClientes();
  }
   getClientes(){
     this.servicio.getClientes().subscribe((data:any)=>{
       console.log(data);
       this.clientes=data;
     })
   }
}
