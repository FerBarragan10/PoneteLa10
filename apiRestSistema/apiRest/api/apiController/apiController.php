<?php
require_once "api.php";
require_once "./../model/tablaModel.php";
class apiController extends api{
  private $model;
    function __construct(){
      parent::__construct();
      $this->model=new tablaModel();
    }
    function getCliente($param=null){
      if(isset($param)){
        $idCliente=$param[0];
        $arreglo=$this->model->getCliente($idCliente);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getClientes();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    }
    function verPedido($param=null){
      if(isset($param)){
        $idProducto=$param[0];
        $arreglo=$this->model->verPedido($idProducto);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getPedidos();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    }

    function getVendedor($param=null){
      if(isset($param)){
        $idVendedor=$param[0];
        $arreglo=$this->model->getVendedor($idVendedor);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getVendedores();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    }
    function getProducto($param=null){
      if(isset($param)){
        $idProducto=$param[0];
        $arreglo=$this->model->getProducto($idProducto);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getProductos();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    }

    function mostrarCamisetas($param=null){
      
      if(isset($param)){
        $idProducto=$param[0];
        $arreglo=$this->model->getProducto($idProducto);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getCamisetas();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    } 
    function mostrarBuzos($param=null){
      
      if(isset($param)){
        $idProducto=$param[0];
        $arreglo=$this->model->getProducto($idProducto);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getBuzos();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    } 
    function mostrarCamperas($param=null){
      
      if(isset($param)){
        $idProducto=$param[0];
        $arreglo=$this->model->getProducto($idProducto);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getCamperas();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    } 
    function mostrarGorras($param=null){
      
      if(isset($param)){
        $idProducto=$param[0];
        $arreglo=$this->model->getProducto($idProducto);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getGorras();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    } 
    function getTipoProducto($param=null){
      if(isset($param)){
        $idtipo=$param[0];
        $arreglo=$this->model->getTipoProducto($idtipo);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getTipoProductos();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    }
    function getMarca($param=null){
      if(isset($param)){
        $idMarca=$param[0];
        $arreglo=$this->model->getMarca($idMarca);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getMarcas();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    }




    function borraViaje($param=null){
    if(count($param) == 1){
      $email=$param[0];
      $r=$this->model->borrarViaje($email);
      if($r==false){
        return $this->jsonResponse($r,200);
      }
      return $this->jsonResponse($r,300);
    }
    else{
      return $this->jsonResponse("no task specified",300);

    }
  }

  function insertarVendedor($param = null){
    $objetoJson = $this->getJsonData();
    $r= $this->model->insertarVendedor($objetoJson->nombre,$objetoJson->nomPagina,$objetoJson->wsp);
    return $this->jsonResponse($r,200);
  }
  function insertarPedido($param = null){
    $objetoJson = $this->getJsonData();
    $r= $this->model->insertarPedido($objetoJson->idCliente,$objetoJson->talle,$objetoJson->idProducto,$objetoJson->fechaPedido,$objetoJson->costoTotal,$objetoJson->cantidad);
    return $this->jsonResponse($r,200);
  

 }
function insertarTipoProducto($param = null){
  $objetoJson = $this->getJsonData();
  $r= $this->model->insertarTipoProducto($objetoJson->nombre);
  return $this->jsonResponse($r,200);
}
function insertarMarca($param = null){
  $objetoJson = $this->getJsonData();
  $r= $this->model->insertarMarca($objetoJson->nombreMarca);
  return $this->jsonResponse($r,200);
}
  function insertarClient($param = null){
    $objetoJson = $this->getJsonData();
    $r= $this->model->insertarCliente($objetoJson->nombre,$objetoJson->apellido,$objetoJson->direccion,$objetoJson->telefono,$objetoJson->correo);
    return $this->jsonResponse($r,200);
}
function insertarProducto($param = null){
 
  $objetoJson = $this->getJsonData();
  $r= $this->model->insertarProducto($objetoJson->idTipo,$objetoJson->club,$objetoJson->color,$objetoJson->idVendedor,$objetoJson->imagen,$objetoJson->isDisponible,$objetoJson->precioXUnid,$objetoJson->idMarca,$objetoJson->talle);
  return $this->jsonResponse($r,200);
}

  function actualizarViaje($param=null){
    if(count($param) == 1){
      $id_apuesta=$param[0];
    $objetoJson = $this->getJsonData();
    $r=$this->model->guardarviaje($objetoJson->email,$objetoJson->fecha_inic,$objetoJson->fecha_fin,$objetoJson->cod_reserva,$objetoJson->compania,$objetoJson->aeronave,$objetoJson->destino,$id_viaje);
      return $this->jsonResponse($r,200);
  }else{
    return $this->jsonResponse("no task specified",300);
    }
  }
  
}

?>


  
