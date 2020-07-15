import { Component, OnInit } from '@angular/core';
import{ ClientService } from '../../services/client.service';
@Component({
  selector: 'app-buzos',
  templateUrl: './buzos.component.html',
  styleUrls: ['./buzos.component.scss']
})
export class BuzosComponent implements OnInit {
buzos:any[]=[];
buzzos:boolean=false;
  constructor(private servicio:ClientService) { }

  ngOnInit(){
    this.buzzos=true;
    this.getBuzos();
  }
 getBuzos(){
   this.servicio.getBuzos().subscribe((data:any)=>{
     console.log(data);
     this.buzos=data;
   })
 }
}
