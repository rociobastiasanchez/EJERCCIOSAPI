'use strict'
// var myMap
// require (["esri/map", "dojo/domReady!"],function (Map){
//     myMap = new Map ("divMap", {
//         basemap : "streets",
//         center : [-122.49, 37.72],
//         zoom: 14,
//     });
// });

// Si queremos coger la referencia espacial también lo podemos hacwer, metiendolo como otra propiedad (extent), además de la del mapa (map)
var myMap;
var toggle; //Añadimos un widget para poder cambiar de mapa base
require(["esri/map", "esri/geometry/Extent", "esri/dijit/BasemapToggle", "esri/layers/ArcGISDynamicMapServiceLayer", "esri/layers/FeatureLayer", "dojo/domReady!"], function(Map, Extent, BasemapToggle, ArcGISDynamicMapServiceLayer, FeatureLayer){
        myMap = new Map ("divMap", {
                basemap: "topo",
                extent: new Extent(
                 {
                  xmax: -13070213.169637226,
                  xmin: -14238170.961834408,
                  ymax: 4855800.378324224,
                  ymin: 3830932.7030768525,
                  spatialReference: {wkid: 102100}
                 }
                ),
               }),
         
        toggle = new BasemapToggle({
        map: myMap,
        basemap: "gray"
         }, "BasemapToggle");
         toggle.startup();

         // var geoLocate = new LocateButton({
         //    map: myMap
         //  }, "LocateButton");
         //  geoLocate.startup();

         var ArcGISDynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer ("http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer");
         myMap.addLayer(ArcGISDynamicMapServiceLayer);
         ArcGISDynamicMapServiceLayer.setOpacity(0.25);
         

         var FeatureLayer = new FeatureLayer("https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0");
         myMap.addLayer(FeatureLayer);
         FeatureLayer.setDefinitionExpression("MAGNITUDE >= '2'");
         


});


//"esri/dijit/LocateButton"

//Para cargar capas a un mapa:
//1. Buscamos en que servicio está la capa que queremos incluir




