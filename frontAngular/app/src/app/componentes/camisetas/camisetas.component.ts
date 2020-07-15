import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.scss']
})
export class CamisetasComponent implements OnInit {
camisetas:any[]=[];
camiseta:boolean=false;
  constructor(private servicio:ClientService) { }

  ngOnInit(){
    this.camiseta=true;
    this.getCamisetas();
    }
    getCamisetas(){
      this.servicio.getCamisetas().subscribe((datos:any)=>{
        console.log(datos);
        this.camisetas=datos;
      })
    }
    
}
