<?php

class usuarioModel{
  private $db;

  function __construct()
  {
   $this->db=$this->Connect();
  }

  private function Connect(){
    return new PDO('mysql:host=localhost;'
   .'dbname=adv;charset=utf8'
   , 'root','');
  }
  function getUsuario(){
        $sentencia = $this->db->prepare( "select * from usuarios");
        $sentencia->execute();
        return $sentencia->fetchAll(PDO::FETCH_ASSOC);
    }


  function agregarUsuario($nombre,$clave){
    $sentencia = $this->db->prepare("INSERT INTO usuarios(nombre,clave) VALUES(?,?)");
    $hash = password_hash($clave, PASSWORD_DEFAULT);
    $sentencia->execute(array($nombre,$hash));
  }
  function getUser($user){
    $sentencia =$this->db->prepare( "select * from usuarios where nombre =? limit 1");
    $sentencia->execute(array($user));
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }


  function removeUsuario($id_usuario){
    $sentencia = $this->db->prepare( "delete from  usuarios  where id_usuario=?");
    $sentencia->execute(array($id_usuario));
  }


}
 ?>
