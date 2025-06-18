<!-- YandexMap.vue -->
<template>
 <div ref="yandexMaps" class="w-full h-full bg-red-600">

 </div>
</template>
  
  <script>
export default {
  data() {
    return {
      mapCenter: [40.386515, 71.783323], // Set the initial center of the map
      zoom: 10, // Set the initial zoom level
      markers: [
        { coords: [40.386515, 71.783323] },
        { coords: [40.386515, 71.783323] },
        // Add more markers as needed
      ],
    };
  },
 mounted() {
    setTimeout(() => {
      console.log(window.ymaps);
       if (window) {
           this.map = new ymaps.Map(this.$refs.yandexMaps, {
             center: this.mapCenter,
             zoom: this.zoom,
           });
 
           for (const marker of this.markers) {
             const placemark = new ymaps.Placemark(marker.coords, {
               hintContent: 'Joylashuv',
               balloonContent: 'Tavsif',
             });
             this.map.geoObjects.add(placemark);
           }
       }
      
    }, 200);
   }
 

};
</script>
  