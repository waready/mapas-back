/**
 *     Globe Software
 *
 * http://www.globe-software.com
 * Author: Rodolfo Vazquez
 * rodolfo at globe-software.com
 *     February 2013
 *
 * Geo localization javascritp functions to include Google Maps in Bantotal.
 */

/**
 * Self-executing anonymous function which defines namespace for Globe Software Geolocation functions.
 * Also redefines $ symbol (jQuery) and redefines undefined to undefined. Both tricks for security reasons.
 *
 */

// Importar la biblioteca de Leaflet
// Esperar a que la página se cargue completamente
window.addEventListener("load", function () {
  // Cargar la biblioteca de Leaflet de forma asíncrona
  //css
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://unpkg.com/leaflet/dist/leaflet.css";
  document.head.appendChild(link);
  //js
  var script = document.createElement("script");
  script.src = "https://unpkg.com/leaflet/dist/leaflet.js";
  document.head.appendChild(script);
  

  // Ejecutar el código dependiente de Leaflet después de cargar la biblioteca
  script.onload = function () {
    var map = L.map("map_canvas").setView([-34.90769360000000, -56.17546780000000], 12);
    var mapCanvas = document.getElementById("map_canvas");
    mapCanvas.style.width = "400px"; // Ancho del 400
    mapCanvas.style.height = "400px"; // Altura de 400

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
	
    var marker = L.marker([-34.90769360000000,  -56.17546780000000 ]).addTo(map);
  };
  alert(3);
});

alert(4);

// var showErrKeyGeo = true;

// var gsmaps = ( function($, undefined) {

// 		"use strict";

// 		var gsloc = { };
//         //private propertieså
// 		var geocoder, map, marker, renderInvoke, snapShotControl;

// 		gsloc.apiKey = function(){
// 			var xmlhttp,xmlApi;
// 			if (window.XMLHttpRequest) {
// 				// Objeto para IE7+, Firefox, Chrome, Opera, Safari
// 				xmlhttp = new XMLHttpRequest();
// 			} else {
// 				// Objeto para IE6, IE5
// 				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// 			}

// 			// Se abre el archivo que esta alojado en el servidor
// 			xmlhttp.open("GET", "apiDynamicKey.XML", false);

// 			// Se ejecuta al invocar .send ya que capta el cambio de estado del archivo
// 			xmlhttp.onreadystatechange = function () {
// 				// Si termino de cargar el archivo XML
// 				if (xmlhttp.readyState === XMLHttpRequest.DONE) {
// 					// -- Si termino sin errores
// 					if (xmlhttp.status === 200) {
// 						// -- Se devuelve la APIKey que se encuentra dentro del tag key
// 						xmlApi = xmlhttp.responseXML.getElementsByTagName("key")[0].textContent.toString();
// 					}else if(xmlhttp.status === 404){
// 						alert("Error al cargar el archivo de configuración de mapas.\nContacte con el área  de Soporte e Infraestructura")
// 						showErrKeyGeo = false;
// 					}
// 				}
// 			};
// 			// Se inicia la conexión con el archivo
// 			xmlhttp.send();
// 			// Se devuelve la key
// 			return xmlApi;
// 		}

//         //gsloc public configuration
//         gsloc.gsconfig = {
//         	map: {
//         		zoom: 15,
//         		zoomMultiple: 13,
//         		lat: -34.878,
//         		lng: -56.076,
//         		key: gsloc.apiKey(),//  RPISTÓN 20/02/2019 se cambia la forma de obtener la key / // GL 02/01/2019 - Se cambia Key de Google maps - "AIzaSyDwjaWch6NVaYBlx0zTnofRKIdijZ9mFjY",
//         		icon: ""
//         	},
//         	autocomplete: {
//         		minlength: 10,
//         		delay: 500,
//         		input:"address"
//         	},
//         	returnInputs: {
//         		lat: "_LAT",
//         		lng: "_LNG"
//         	}
//         };

//         //private log method
//         function log(msj) {
//             if (window.console) {
//                 console.log(msj);
//             }
// 		}

//         /**
//          * Public function define mapOptions and instantiate google maps object.
//          */
//         gsloc.init = function() {

//             var mapOptions = {
//                 center : new google.maps.LatLng(gsloc.gsconfig.map.lat, gsloc.gsconfig.map.lng),
//                 zoom : gsloc.gsconfig.map.zoom,
//                 mapTypeId : google.maps.MapTypeId.ROADMAP,
// 				useStaticMap:true
//             };
//             map = new google.maps.Map($("#map_canvas")[0], mapOptions);
// 			// add control
//             var snapOpts = {
// 				map: map
//             };

//             snapShotControl = new SnapShotControl(snapOpts);

//             if(renderInvoke){
//             	renderInvoke();
//             }
//         };

//         /**
//          * Public function to get Static Map URL
//          */
// 		 gsloc.getMapUrl = function(){
// 			if(snapShotControl)
// 				return snapShotControl.getCenteredImage_();
// 			else
// 				return "";
// 		 }

//         /**
//          * Public function creates Script Dom element and loads google maps javascript inside.
//          */
//         gsloc.loadMapScript = function ( f ) {

// 			renderInvoke = f;
//             var script = document.createElement("script");
//             script.type = "text/javascript";
//             script.src = "https://maps.googleapis.com/maps/api/js?v=3.47&key=" + gsloc.gsconfig.map.key + "&callback=gsmaps.init";
//             document.body.appendChild(script);

//             var scriptcnvrt = document.createElement("script");
//             scriptcnvrt.type = "text/javascript";
//             scriptcnvrt.src = "snapshotcontrol.js";
//             document.body.appendChild(scriptcnvrt);

// 			if ($('.FormBase'))
// 				$('.FormBase')[0].oncontextmenu = function(event) { return false; };
//         };

//         /**
//          * Public function which invokes google javascript api to convert human readable direction
//          * into geographics coordinates.
//          *
//          * @param {String} address: The human readable address to geocode through google services.
//          * @param {function} callback: The function to call when geocode is successfull.
//          */
//         gsloc.codeAddress = function ( address, callback ) {

//             geocoder = new google.maps.Geocoder();
//             //call to geocode function, sends an address and a anonymous function which will be called by google api
//             geocoder.geocode( {'address' : address}, function(results, status) {
// 				//if response is OK invokes
//                 if (status == google.maps.GeocoderStatus.OK) {
//                     log("Status OK");

// 					//call callback function, sends resuts to be procesed
//                     callback(results);
//                 } else {
//                     log("Geocode was not successful for the following reason: " + status);
//                 }
//             });
//         };

//         /**
//          * Public function to render markers for locations received. Each location should have latitude, longitude and may have also icon definition.
//          * @param {array} locations: array of objets contaning latitude, longitude, icon
//          * @param {object} center: objetc containing location information (lat and lng) to center the map. If not received the map is centered at first location
//          * @param {object} zoom to apply to the map. If not reveived default apply (gsloc.gsconfig.map.zoomMultiple)
//          *
//          */
//         gsloc.renderMarkers = function ( locations, center, zoom) {

//         	var i;
// 			var infowindows = function(title){
// 				return new google.maps.InfoWindow({
// 						content: title
// 					});
// 				/*return new google.maps.InfoBox(
// 				{
// 					content: title
// 				});*/
// 			};
// 			for (i = 0; i < locations.length; i += 1) {
// 				var oneMarker = new google.maps.Marker({
//                     map : map,
//                     position : new google.maps.LatLng(locations[i].lat,locations[i].lng,false),
//                     icon: locations[i].icon || gsloc.gsconfig.map.icon,
//                     title: locations[i].tooltip
//                 });
// 				google.maps.event.addListener(oneMarker, 'click', function() {
// 					infowindows(this.getTitle()).open(map, this);
// 				});
// 			}
// 			//set zoom
// 			if(zoom){
// 				map.setZoom(zoom);
// 			}else{
// 				//zoom from configuration
// 				map.setZoom(gsloc.gsconfig.map.zoomMultiple);
// 			}
// 			//center map
// 			if(center){
// 				if(center.country){
// 					gsloc.codeAddress(center.country, function(results){
// 						map.setCenter(results[0].geometry.location);
// 						map.fitBounds(results[0].geometry.bounds);
// 					});
// 				}else{
// 					map.setCenter(new google.maps.LatLng(center.lat,center.lng,false));
// 				}
// 			}else{
// 				map.setCenter(new google.maps.LatLng(locations[0].lat,locations[0].lng,false));
// 			}
// 			$('.gmnoprint').removeClass('gmnoprint');
//        };

//         /**
//          * Public function: Public function which defines autocomplete behaviour and attach that to the
//          * dom's element received.
//  		 *
//          */
//         gsloc.autocomplete = function() {
//         	//find element
//             var elementSelector = "#" + gsloc.gsconfig.autocomplete.input;
//             var input = $(elementSelector);
//             if (input) {
// 				$(input).keydown(function(e) {
// 					if (e.keyCode == 13)
// 						return false;
// 				});

// 				//set jQuery UI autocomplete
//                 input.autocomplete({
//                 	//function is assigned to source to resolve data
//                     source : function(request, response) {
//                     	//call to CodeAddress to get Formatted directions from input address value
//                     	//send input value and a function callback to be invocated with results data
//                     	//it converts results to a jQuery accepted format and invokes callback 'response'
//                     	//to populate autocomplete options.
//                         gsloc.codeAddress(request.term, function(results) {
//                             var datasource = [];
//                             $.each(results, function(index, oneresult) {
//                                 var item = {};
//                                 item['value'] = oneresult.formatted_address;
//                                 item['label'] = oneresult.formatted_address;
//                                 item['valueObj'] = oneresult;
//                                 datasource.push(item);
//                             });
//                             response(datasource);
//                         });
//                     },
//                     minLength : gsloc.gsconfig.autocomplete.minlength,
//                     delay : gsloc.gsconfig.autocomplete.delay,
//                     //selection function, center map based on selected address data, builds marker and refresh input value
//                     select : function(event, ui) {
//                         //removes old marker from map
//                         if(marker){
//                         	marker.setMap(null);
//                         }
//                         //set new value to input address
//                         input.val(ui.item.value);
//                         map.setCenter(ui.item.valueObj.geometry.location);
//                         //redefine marker
//                         marker = new google.maps.Marker({
//                             map : map,
//                             position : ui.item.valueObj.geometry.location,
//                             icon: gsloc.gsconfig.map.icon,
//                             draggable: true
//                         });

//                         //add listener function to move map and update lat,lng fields
//                         google.maps.event.addListener(marker, "dragend", function(event) {
//        						var point = marker.getPosition();
//        						map.panTo(point);
//        						//try to set latitude in input field
//        						if($( "#" + gsloc.gsconfig.returnInputs.lat )[0]){
//        							$( "#" + gsloc.gsconfig.returnInputs.lat ).val(point.lat());
//        							if( $( "#" + "span_" + gsloc.gsconfig.returnInputs.lat )[0]){
//        								$( "#" + "span_" + gsloc.gsconfig.returnInputs.lat )[0].firstChild.nodeValue = point.lat();
//        							}
//        						}else
// 								if($("input[name=" + gsloc.gsconfig.returnInputs.lat + "]" )[0]){
// 									$( "input[name=" + gsloc.gsconfig.returnInputs.lat + "]" ).val(point.lat());
// 									if( $( "#" + "span_" + gsloc.gsconfig.returnInputs.lat )[0]){
// 										$( "#" + "span_" + gsloc.gsconfig.returnInputs.lat )[0].firstChild.nodeValue = point.lat();
// 									}
//        						}else{

//        							alert("No se encuentra el campo Id: '" + gsloc.gsconfig.returnInputs.lat + "', correspondiente a Latitud");
//        						}
//        						//try to set longitude in input field
//        						if($( "#" + gsloc.gsconfig.returnInputs.lng )[0]){
//        							$( "#" + gsloc.gsconfig.returnInputs.lng ).val(point.lng());
//        							if($( "#" + "span_" + gsloc.gsconfig.returnInputs.lng )[0]){
//        								$( "#" + "span_" + gsloc.gsconfig.returnInputs.lng )[0].firstChild.nodeValue = point.lng();
//        							}
//        						}else
// 								if($( "input[name=" + gsloc.gsconfig.returnInputs.lng + "]")[0]){
// 									$( "input[name=" + gsloc.gsconfig.returnInputs.lng + "]" ).val(point.lng());
// 									if($( "#" + "span_" + gsloc.gsconfig.returnInputs.lng )[0]){
// 										$( "#" + "span_" + gsloc.gsconfig.returnInputs.lng )[0].firstChild.nodeValue = point.lng();
// 									}
//        						}else{
//        							alert("No se encuentra el campo Id: '" + gsloc.gsconfig.returnInputs.lng + "', correspondiente a Longitud");
//        						}
//         				});

//                         //render lat and lng
//                         //try to set latitude in input field
//    						if($( "#" + gsloc.gsconfig.returnInputs.lat )[0]){
//    							$( "#" + gsloc.gsconfig.returnInputs.lat ).val(ui.item.valueObj.geometry.location.lat());
//    							if($( "#" + "span_" + gsloc.gsconfig.returnInputs.lat )[0]){
//    								$( "#" + "span_" + gsloc.gsconfig.returnInputs.lat )[0].firstChild.nodeValue = ui.item.valueObj.geometry.location.lat();
//    							}
//    						}else
//    						if($( "input[name=" + gsloc.gsconfig.returnInputs.lat + "]" )[0]){
//    							$( "input[name=" + gsloc.gsconfig.returnInputs.lat + "]" ).val(ui.item.valueObj.geometry.location.lat());
//    							if($( "#" + "span_" + gsloc.gsconfig.returnInputs.lat )[0]){
//    								$( "#" + "span_" + gsloc.gsconfig.returnInputs.lat )[0].firstChild.nodeValue = ui.item.valueObj.geometry.location.lat();
//    							}
// 						}else{
//    							alert("No se encuentra el campo Id: '" + gsloc.gsconfig.returnInputs.lat + "', correspondiente a Latitud");
//    						}
//    						//try to set longitude in input field
//    						if($( "#" + gsloc.gsconfig.returnInputs.lng )[0]){
//    							$( "#" + gsloc.gsconfig.returnInputs.lng ).val(ui.item.valueObj.geometry.location.lng());
//    							if($( "#" + "span_" + gsloc.gsconfig.returnInputs.lng )[0]){
//    								$( "#" + "span_" + gsloc.gsconfig.returnInputs.lng )[0].firstChild.nodeValue = ui.item.valueObj.geometry.location.lng();
//    							}
//    						}else
//    						if($( "input[name=" + gsloc.gsconfig.returnInputs.lng + "]" )[0]){
//    							$( "input[name=" + gsloc.gsconfig.returnInputs.lng + "]" ).val(ui.item.valueObj.geometry.location.lng());
//    							if($( "#" + "span_" + gsloc.gsconfig.returnInputs.lng )[0]){
//    								$( "#" + "span_" + gsloc.gsconfig.returnInputs.lng )[0].firstChild.nodeValue = ui.item.valueObj.geometry.location.lng();
//    							}
//    						}
// 						else{
//    							alert("No se encuentra el campo Id: '" + gsloc.gsconfig.returnInputs.lng + "'correspondiente a Longitud");
//    						}
//                     },
//                     //updates input value when focus on autocomplete row
//                     focus : function(event, ui) {
//                         input.val(ui.item.value);
//                     },
//                     //add custom class to manage autocomlete style.
//                     //it is used to fix dorp down list width
//                     create: function(event, ui) {

//                     	$("ul.ui-autocomplete").addClass('autocomplete_options');
//                     }

//                 });
//             }
//         };

//         /**
//          * Call autocomplete function on address input
//          */
//         gsloc.getLocations = function( ) {

//            //find element
//             var elementSelector = "#" + gsloc.gsconfig.autocomplete.input;
//             var input = $(elementSelector);
//             if (input) {
//             	input.trigger("keydown");
//             	input.focus();
//             }
//         };

//         return gsloc;

// 	}(jQuery));

// 	function gm_authFailure() {
// 		if(showErrKeyGeo){
// 		alert('Error no se ha podido cargar el mapa, API Key invalida o nula.\nContacte con el área de Soporte e Infraestructura');}
// 	};
