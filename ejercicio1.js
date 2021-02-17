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
require(["esri/map", "esri/geometry/Extent", "esri/dijit/BasemapToggle", "esri/dijit/LocateButton", "dojo/domReady!"], function(Map, Extent, BasemapToggle, LocateButton){
        myMap = new Map ("divMap", {
        basemap: "topo",
        extent: new Extent(
             {
                xmax: -582175.8739344166,
                xmin: -584564.5310683912,
                ymax: 4889748.845115015,
                ymin: 4887360.187981041,
                spatialReference: {wkid: 102100},
             }
          ),
         });
        toggle = new BasemapToggle({
        map: myMap,
        basemap: "gray"
         }, "BasemapToggle");
         toggle.startup();

         geoLocate = new LocateButton({
            map: myMap
          }, "LocateButton");
          geoLocate.startup();

});




