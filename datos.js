
        $("#btn").click(function() {

        $.ajax({
          url: "https://nhorenstein.com/Coordenada/GetConPunto",
          type: "GET",

          success: function(result) {
            swal("¡Conexion exitosa!","","success");
            
              if(result.ok){

                  obtenerMarcador(result.return)    
              }
          },
          error: function(error) {
            swal("Error de conexion con la api","","error");
            
            marcador = { lat: -31.442612557097192 , lng: -64.19401014774253};

            icon = new H.map.Icon("https://cdn.icon-icons.com/icons2/2959/PNG/128/pin_placeholder_location_map_marker_geolocation_address_icon_185987.png", { size: { w: 40, h: 50 } });
            marker = new H.map.Marker(marcador, { icon: icon });

            map.addObject(marker);

            map.setCenter(marcador)

            
            map.setZoom(14)

          }
          });
        });

        function obtenerMarcador(datos){
           
        let latitud= datos.latitud;
        let longitud=datos.longitud;
        let marcador = { lat:latitud , lng:  longitud };
        let icon = new H.map.Icon("https://cdn.icon-icons.com/icons2/2959/PNG/128/pin_placeholder_location_map_marker_geolocation_address_icon_185987.png", { size: { w: 40, h: 50 } });
        let marker = new H.map.Marker(marcador, { icon: icon });

        map.addObject(marker);

        map.setCenter(marcador)

        map.setZoom(15)
        }
