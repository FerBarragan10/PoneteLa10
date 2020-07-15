import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-gorras',
  templateUrl: './gorras.component.html',
  styleUrls: ['./gorras.component.scss']
})
export class GorrasComponent implements OnInit {

 
gorras:any[]=[];
  constructor(private servicio:ClientService) { }

  ngOnInit(){
    this.getGorras();
  }
  getGorras(){
   this.servicio.getGorras().subscribe((data:any)=>{
     console.log(data);
     this.gorras=data;
   })
 }
}


