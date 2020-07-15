import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/producto';
import { ClientService } from '../../services/client.service';
@Component({
  selector: 'app-pagina-imagen',
  templateUrl: './pagina-imagen.component.html',
  styleUrls: ['./pagina-imagen.component.scss']
})
export class PaginaImagenComponent implements OnInit {

  producto=new Producto();
  id:string;
  idProducto:number;
  disponible: boolean;
  constructor(private route:ActivatedRoute,private servicio:ClientService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.idProducto=parseInt(this.id);
    this.getProducto();
  }
  getProducto(){
  this.servicio.getProducto(this.idProducto).subscribe((produc:Producto)=>{
    console.log(produc);
    console.log(produc.nombreMarca);
    console.log(produc.talle);
    console.log(produc.isDisponible);  
    if(produc.isDisponible==true){ 
      console.log("true");
      this.disponible=true;
    }
    else{
      console.log("false");
      this.disponible=false;
    }
    this.producto=produc;
  });
  }

}
