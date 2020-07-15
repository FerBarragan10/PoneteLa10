<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

class tablaModel{
  private $db;
  function __construct()
  {
    $this->db=$this->Connect();
  }
  private function Connect(){
    return new PDO('mysql:host=localhost;'
    .'dbname=sistemastock;charset=utf8'
    , 'root', '');
  }
 
  function getClientes(){
    $sentencia = $this->db->prepare( "select * from cliente");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  
 
  function getCamisetas(){
    $sentencia = $this->db->prepare("select * from producto where idTipo=1");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  function getBuzos(){
    $sentencia = $this->db->prepare("select * from producto where idTipo=2");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  function getCamperas(){
    $sentencia = $this->db->prepare("select * from producto where idTipo=3");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  function getGorras(){
    $sentencia = $this->db->prepare("select * from producto where idTipo=4");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  function getCliente($idcliente){
    $sentencia = $this->db->prepare("select * from cliente where idCliente=?");
    $sentencia->execute(array($idcliente));
    return $sentencia->fetch(PDO::FETCH_ASSOC);
  }
  function getTipoProductos(){
    $sentencia = $this->db->prepare( "select * from tipoproducto");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
 
  function getTipoProducto($idtipo){
    $sentencia = $this->db->prepare("select * from tipoproducto where idtipo=?");
    $sentencia->execute(array($idtipo));
    return $sentencia->fetch(PDO::FETCH_ASSOC);
  }
  function getMarcas(){
    $sentencia = $this->db->prepare( "select * from marca");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  function getMarca($idMarca){
    $sentencia = $this->db->prepare("select * from marca where idMarca=?");
    $sentencia->execute(array($idMarca));
    return $sentencia->fetch(PDO::FETCH_ASSOC);
  }


  function getVendedores(){
    $sentencia = $this->db->prepare( "select * from vendedor");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
 
  function getVendedor($idVendedor){
    $sentencia = $this->db->prepare("select * from vendedor where idVendedor=?");
    $sentencia->execute(array($idVendedor));
    return $sentencia->fetch(PDO::FETCH_ASSOC);
  }

  function getProductos(){
    $sentencia = $this->db->prepare( "SELECT marca.nombreMarca,producto.* FROM `producto` join `marca` on producto.idMarca=marca.id_marca");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
 
  function getProducto($idProducto){
    $sentencia = $this->db->prepare("SELECT marca.nombreMarca,producto.* FROM `producto` join `marca` on producto.idMarca=marca.id_marca where idProducto=?");
    $sentencia->execute(array($idProducto));
    return $sentencia->fetch(PDO::FETCH_ASSOC);
  }
 
  function insertarCliente( $nombre,$apellido,$direccion,$telefono,$correo){
    $sentencia = $this->db->prepare("INSERT INTO cliente(nombre,apellido,direccion,telefono,correo) VALUES(?,?,?,?,?)");
    $sentencia->execute(array( $nombre,$apellido,$direccion,$telefono,$correo));
    $lastId =  $this->db->lastInsertId();
    return $this->getProducto($lastId);
  }

  function insertarVendedor($nombre,$nomPagina,$wsp){
    $sentencia = $this->db->prepare("INSERT INTO vendedor(nombre,nomPagina,wsp) VALUES(?,?,?)");
    $sentencia->execute(array($nombre,$nomPagina,$wsp));
    $lastId =  $this->db->lastInsertId();
    return $this->getVendedor($lastId);
  }

  function insertarTipoProducto($nombre){
    $sentencia = $this->db->prepare("INSERT INTO tipoproducto(nombre) VALUES(?)");
    $sentencia->execute(array($nombre));
    $lastId =  $this->db->lastInsertId();
    return $this->getVendedor($lastId);
  }
  function insertarMarca($nombre){
    $sentencia = $this->db->prepare("INSERT INTO marca(nombre) VALUES(?)");
    $sentencia->execute(array($nombre));
    $lastId =  $this->db->lastInsertId();
    return $this->getVendedor($lastId);
  }

  function insertarProducto( $idTipo,$club,$color,$idVendedor,$imagen,$isDisponible,$precioXUnid,$idMarca,$talle){
    $sentencia = $this->db->prepare("INSERT INTO producto(idTipo,club,color,idVendedor,imagen,isDisponible,precioXUnid,idMarca,talle) VALUES(?,?,?,?,?,?,?,?,?)");
    $sentencia->execute(array( $idTipo,$club,$color,$idVendedor,$imagen,$isDisponible,$precioXUnid,$idMarca,$talle));
    $lastId =  $this->db->lastInsertId();
    return $this->getProducto($lastId);
  }



 
  function borrarViaje($id_viaje){
    $sentencia = $this->db->prepare("delete from viaje where id_viaje=?");
    $sentencia->execute(array($id_viaje));
  }
  function ActualizarViaje($email,$fecha_inic,$fecha_fin,$cod_reserva,$compania,$aeronave,$destino,$id_viaje){
    $sentencia = $this->db->prepare( "update viaje set id_juego= ?, fecha = ?, monto = ? where id_apuesta= ?");
    $sentencia->execute(array($email,$fecha_inic,$fecha_fin,$cod_reserva,$compania,$aeronave,$destino,$id_viaje));
  }

  function  existeUsuario($email){
    $r = $this->getUsuario($email);
    if ($r!=NULL) {
      return true;
    }else {
      return false;
    }
  }



  function getUsuario(){
    $sentencia = $this->db->prepare( "select * from usuario");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }


  function agregarUsuario($nombre,$apellido,$email,$fecha_nac){
    $sentencia = $this->db->prepare("INSERT INTO usuario(nombre,apellido,email,fecha_nac) VALUES(?,?,?,?)");
  //$hash = password_hash($clave, PASSWORD_DEFAULT);
    $sentencia->execute(array($nombre,$apellido,$email,$fecha_nac));
  }
  function getUser($user){
    $sentencia =$this->db->prepare( "select * from usuario where email =? limit 1");
    $sentencia->execute(array($user));
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  function removeUsuario($email){
    $sentencia = $this->db->prepare( "delete from  usuario where email=?");
    $sentencia->execute(array($email));
  }
  function insert_img($img){
    $sentencia = $this->db->prepare("INSERT INTO ejemplo(img) VALUES(?)");
  //$hash = password_hash($clave, PASSWORD_DEFAULT);
    $sentencia->execute(array($img));
  }
} 
?>
