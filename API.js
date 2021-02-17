'use strict'
//Copiamos el método require para cargar los módulos y la función
//Copiamos lo de la API (en esri Map):
// require(["esri/map"], function(Map)
//Dojo es un framework, que nos controla que esté cargado el DOM. Lo vamos a necesitar para webappbuilder

require (["esri/map", "dojo/domReady!"],function (Map){
    var myMap = new Map ("divMap", {
        basemap : "gray"
    });
});


//Dojo está dentro del API 3 de ArcGIS, en la API 4 ya no está

