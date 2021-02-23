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
require([
        "esri/map", 
        "esri/graphic",
        "esri/Color",
        "esri/toolbars/draw",
        "esri/layers/GraphicsLayer",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/TextSymbol",
        "esri/symbols/Font",

        
        "esri/geometry/Extent", 
        "esri/dijit/BasemapToggle", 
        "esri/layers/ArcGISDynamicMapServiceLayer", 
        "esri/layers/FeatureLayer", 
        "esri/dijit/Legend",
        "esri/dijit/BasemapGallery", 
        
        "dojo/parser", 
        "dojo/on",
        "dojo/dom",
        "dojo/ready",
        "dojo/_base/Color",
        "dojo/_base/array",
        
        "dijit/layout/BorderContainer", 
        "dijit/layout/ContentPane", 
        "dijit/TitlePane",
        "dojo/domReady!"], 

         function(
                 Map, Graphic, Color, Draw, GraphicsLayer,SimpleLineSymbol, SimpleMarkerSymbol, TextSymbol, Font, 
                 Extent, BasemapToggle, ArcGISDynamicMapServiceLayer, FeatureLayer, Legend, BasemapGallery, 
                 parser, on, dom, readyef, array){

        parser.parse();

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

         var mapserver = new ArcGISDynamicMapServiceLayer ("http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer");
         myMap.addLayer(mapserver);
         mapserver.setOpacity(0.25);
         

         var terremotos = new FeatureLayer("https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0");
         myMap.addLayer(terremotos);
         terremotos.setDefinitionExpression("MAGNITUDE >= '2'");

         var leyenda = new Legend ({
                 map: myMap,
         }, "leyenda");
         leyenda.startup();

         var mapabase = new BasemapGallery({
         showArcGISBasemaps: true,
         map: myMap
         }, "mapabase");
        mapabase.startup();

        //Evento para que cuando se cargen las capas, se ejecute la leyenda

        // mapabase.on("layers-add-result", function(){
        //         var dijitLegend
        // })
         
        //Podemos dibujar sobre el mapa

        //Cuando se carge el ampa, añadimos el toolsbar

        myMap.on('load', inciodibujo);

        function inciodibujo(){
            const toolbar = new Draw (myMap);
            toolbar.activate(Draw.POLYGON);
            toolbar.on("draw-complete", addToMap);
        };

        function addToMap (params){
            console.log('terminé de pintar', params);
            var simbolo = new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            new Color("blue"), 2);
            var misgraficos = new Graphic(params.geometry,simbolo);
            myMap.graphics.add(misgraficos)
        };


        //Añadimos la GraphicsLayer



});


//"esri/dijit/LocateButton"

//Para cargar capas a un mapa:
//1. Buscamos en que servicio está la capa que queremos incluir




