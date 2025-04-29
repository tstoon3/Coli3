<script setup>
import { onMounted } from 'vue'

const initMap = () => {
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 13.7563, lng: 100.5018 }, // Bangkok
    zoom: 14,
  })

  // ปักหมุด
  new window.google.maps.Marker({
    position: { lat: 13.7563, lng: 100.5018 },
    map,
    title: 'กรุงเทพฯ',
  })
}

// โหลด Google Maps Script แล้ว init map
const loadGoogleMaps = () => {
  const script = document.createElement('script')
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBnHYFLe-0JVKOSTX5_LYQg1UMFP-rlwhQ&callback=initMap`
  script.async = true
  document.head.appendChild(script)

  // ต้องประกาศฟังก์ชันให้ global ด้วย (Google จะหา)
  window.initMap = initMap
}

onMounted(() => {
  loadGoogleMaps()
})
</script>

<template>
  <div id="map" class="w-full h-[500px]"></div>
</template>
