import { Component, OnInit } from '@angular/core';
import { Producto}from'../../models/producto';
import { NgForm } from '@angular/forms';
import{ClientService} from'../../services/client.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  producto=new Producto();
  res:string;
  vendedores:[]=[];
  marcas:[]=[];
  tipos:[]=[];

  archivo = {
    nombre: null,
    nombreArchivo: null,
    base64textString: null
  }

  constructor(private servicio:ClientService) { }

  ngOnInit(){
    this.getVendedores();
    this.getTiposProductos();
    this.getMarcas();
    this.producto.isDisponible=false;
    console.log(this.producto.isDisponible);
  }

 
  getTiposProductos(){
    this.servicio.getTiposProductos().subscribe((data:any)=>{
      console.log(data);
      this.tipos=data;
    })
  }
  getMarcas(){
    this.servicio.getMarcas().subscribe((data:any)=>{
      console.log(data);
      this.marcas=data;
    })
  }

  getVendedores(){
    this.servicio.getVendedores().subscribe((data:any)=>{
      console.log(data);
      this.vendedores=data;
    })
  }

 
  seleccionarArchivo(event) {
    let files = event.target.files;
    let file = files[0];
    this.archivo.nombreArchivo = file;
    console.log(this.archivo.nombreArchivo.name);
    this.res = this.archivo.nombreArchivo.name.split(".", 2);
    console.log(this.res[1]);
    if(files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvent) {
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }
  
  guardar(form:NgForm) {
    console.log(this.producto);
    console.log(this.archivo);
    this.producto.imagen=this.archivo.nombreArchivo.name;
    console.log(this.producto.talle);
    console.log(this.producto.imagen);
    this.servicio.insertProducto(this.producto).subscribe(datos => {
      console.log("se ha cargado correctamente");     
      }
    );
  }

 

}


