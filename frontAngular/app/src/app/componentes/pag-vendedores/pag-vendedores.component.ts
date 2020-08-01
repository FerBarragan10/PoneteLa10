import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-pag-vendedores',
  templateUrl: './pag-vendedores.component.html',
  styleUrls: ['./pag-vendedores.component.scss']
})
export class PagVendedoresComponent implements OnInit {
  vendedores=[]=[];
  constructor(private servicio:ClientService) { }

  ngOnInit(){
    this.getVendedores();
  }
  getVendedores(){
    this.servicio.getVendedores().subscribe((data:any)=>{
      console.log(data);  
      this.vendedores=data;
    });
  }
}