import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{ ClientService } from '../../services/client.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  
    forma:FormGroup;
    constructor(private servicio:ClientService) {
      this.forma=new FormGroup({
        'nombre':new FormControl('',[Validators.required,
                                    Validators.minLength(3)]),
        'apellido':new FormControl('',Validators.required),
        'direccion':new FormControl('',Validators.required),
        'telefono':new FormControl('',Validators.required),
        'correo':new FormControl('',[Validators.required,
                                    Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
                                  ]),
        'sexo':new FormControl('',Validators.required),
                            
        });
    }    

  ngOnInit(){
  }


  agregarCliente(forma:FormGroup){
    let cliente=new Cliente();
    cliente.nombre=this.forma.value.nombre;
    cliente.apellido=this.forma.value.apellido;
    cliente.direccion=this.forma.value.direccion;
    cliente.telefono=this.forma.value.telefono;
    cliente.correo=this.forma.value.correo;
    cliente.sexo=this.forma.value.sexo;
    console.log(cliente.sexo);
    console.log(cliente);
    this.servicio.agregaCliente(cliente).subscribe(data=>{
     console.log("cliente agregado correctamente");
    })
  }

}  

