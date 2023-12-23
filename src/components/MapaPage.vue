<template>
    <div>
      <h1>Mapa de mi universidad</h1>
      <div id="map" class="maps"></div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        vendedores: [
          {
            nombre: "Vendedor 1",
            latitud: 19.39552735360173,
            longitud: -99.09127362406606,
            marker: null,
          },
          {
            nombre: "Vendedor 2",
            latitud: 19.396374093876133,
            longitud: -99.09234079855256,
            marker: null,
          },
        ], 
      };
    },
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
      script.onload = this.initializeMap;
      document.body.appendChild(script);
    },
    methods: {
      initializeMap() {
        const L = window.L;
        if (L) {
          const TU_LATITUD = 19.39675429414465;
          const TU_LONGITUD = -99.09301694821026;
          const map = L.map("map").setView([TU_LATITUD, TU_LONGITUD], 20);
  
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          }).addTo(map);
  
          this.vendedores.forEach((vendedor) => {
            const marker = L.marker([vendedor.latitud, vendedor.longitud]).addTo(map);
            marker.bindPopup(vendedor.nombre);
            vendedor.marker = marker;
          });
  
          const NUEVA_LATITUD = 19.39552735360173;
          const NUEVA_LONGITUD = -99.09127362406606;
          this.actualizarUbicacionVendedor(0, NUEVA_LATITUD, NUEVA_LONGITUD);
        } else {
          console.error('Leaflet no está cargado correctamente');
        }
      },
      actualizarUbicacionVendedor(indice, nuevaLatitud, nuevaLongitud) {
        const vendedor = this.vendedores[indice];
        vendedor.latitud = nuevaLatitud;
        vendedor.longitud = nuevaLongitud;
        vendedor.marker.setLatLng([nuevaLatitud, nuevaLongitud]);
      },
    },
  };
</script>

<style>
.maps{
    height: 500px;
}
</style>