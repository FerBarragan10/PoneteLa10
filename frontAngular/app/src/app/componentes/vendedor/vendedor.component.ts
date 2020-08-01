import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {

  
  forma:FormGroup;
  constructor(private servicio:ClientService) {
    this.forma=new FormGroup({
      'nombre':new FormControl('',[Validators.required,
                                  Validators.minLength(3)]),
      'nomPagina':new FormControl('',Validators.required),
      
      'wsp':new FormControl('',Validators.required),
     
      });
  }    

ngOnInit(){
}


agregarProveedor(forma:FormGroup){
  let proveedor=new Proveedor();
  proveedor.nombre=this.forma.value.nombre;
  proveedor.nomPagina=this.forma.value.nomPagina;
  proveedor.wsp=this.forma.value.wsp;

 
  this.servicio.insertProveedor(proveedor).subscribe(data=>{
   console.log("proveedor agregado correctamente");
  })
}

}
