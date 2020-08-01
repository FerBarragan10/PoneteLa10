<?php

class configApi
{
    public static $RESOURCE = 'resource';
    public static $PARAMS = 'params';
    public static $RESOURCES = [
      //'juego#GET'=> 'apiController#getJuegos',
      'usuario#GET'=> 'apiController#getUsuarios',
      'usuario#DELETE'=> 'apiController#removeUsuario',
      'usuario#POST'=> 'apiController#agregarUsuario',
      //'usuario#PUT'=> 'apiController#updateJuego',
      'cliente#GET'=>   'apiController#getCliente',
      'cliente#POST'=>'apiController#insertarClient',
      'vendedor#GET'=> 'apiController#getVendedor',
      'vendedor#POST'=> 'apiController#insertarVendedor',
      'producto#GET'=> 'apiController#getProducto',
      'pedido#POST'=> 'apiController#insertarPedido',
      'verPedido#GET'=> 'apiController#verPedido',
      'pedido#POST'=> 'apiController#insertarPedido',
      'producto#POST'=> 'apiController#insertarProducto',
      'tipoProducto#GET'=> 'apiController#getTipoProducto',
      'tipoProducto#POST'=> 'apiController#insertarTipoProducto',
      'marca#GET'=> 'apiController#getMarca',
      'marca#POST'=> 'apiController#insertarMarca',
      'camisetas#GET'=>'apiController#mostrarCamisetas',
      'buzos#GET'=>'apiController#mostrarBuzos',
      'camperas#GET'=>'apiController#mostrarCamperas',
      'gorras#GET'=>'apiController#mostrarGorras',
      //'viaje#POST'=> 'apiController#insertarViaje',
      //'viaje#PUT'=> 'apiController#actualizarViaje',
    
    ];

}

 ?>
