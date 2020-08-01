
export class Producto {
    idProducto:number;
    idTipo:number;
    club:string;
    color:string;
    idVendedor:number;
    imagen:any;
    extension:string;
    isDisponible:boolean;
    precioXUnid:number;
    idMarca:number;
    nombreMarca:string;
    talle:string;
    nombre:string;

    /*constructor(nombre:string,club:string,color:string,idVendedor:number,imagen:any,extension:string,isDisponible:boolean,precioXUnid:number){
       this.nombre=nombre;
       this.club=club;
       this.color=color;
       this.idVendedor=idVendedor;
       this.imagen=imagen;
       this.extension=extension;
       this.isDisponible=isDisponible;
       this.precioXUnid=precioXUnid;
       let buffer=Uint8Array.from(atob(this.imagen), c => c.charCodeAt(0));
       let blob=new Blob([buffer], { type: "image/"+this.extension });
       this.imgUrl=URL.createObjectURL(blob);
    }*/

}
