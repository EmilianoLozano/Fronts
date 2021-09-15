        
        var platform = new H.service.Platform({
            apikey: 'P0RsxXfRv8im4c0nyLFxHbMZ_rLbClTxYDGduXW9Mzs'
        });
        var defaultLayers = platform.createDefaultLayers();
       
        var map = new H.Map(document.getElementById('mapContainer'),
            defaultLayers.vector.normal.map,
            {
                center: { lat: -31.3687523, lng: -64.2403843 },
                zoom: 10,
                pixelRatio: window.devicePixelRatio || 1
            }
        );

        window.addEventListener('resize', () => map.getViewPort().resize());
    
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        var ui = H.ui.UI.createDefault(map, defaultLayers);

