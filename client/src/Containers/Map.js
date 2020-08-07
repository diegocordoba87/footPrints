
    let platform = new H.service.Platform({
        'apikey': '{x0ctxWIBslUK51f47JpqheGPcD8W3VBNTS_ZoFNTJgo}'
      });
    
      let defaultLayers = platform.createDefaultLayers();
    
      let map = new H.Map(
          document.getElementById('mapContainer')
          
      )