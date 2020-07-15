<?php
class api{
  protected $data;
  function __construct(){
   $this->data=file_get_contents("php://input");
  }
    public function jsonResponse($data,$status){
     header("Content-Type: application/json");
     header("HTTP/1.1 " . $status . " " . $this->requestStatus($status));
     return json_encode($data);
   }
  private  function requestStatus($code){
    $status=array(
       200=>"ok",
       404=>"not found",
       500=>"internal server error",
       300=>"task not found",
        405=>"apuesta not found",
          406=>"monto de juego de cartas es mayor",
           407=>"monto de juego de cartas es igual",
             408=>"monto de juego de cartas es menor"
    );
    return($status[$code])?$status[$code]:$status[500];
  }
  function getJsonData(){
    return json_decode($this->data);
  }
}
 ?>
