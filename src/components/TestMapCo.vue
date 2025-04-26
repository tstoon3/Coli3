<script setup>

</script>
<template>
  <div class="h-[500px] w-full">
    <GMapMap
      :center="{ lat: 13.7563, lng: 100.5018 }"
      :zoom="14"
      map-type-id="roadmap"
      style="width: 100%; height: 100%"
    >
      <GMapMarker :position="{ lat: 13.7563, lng: 100.5018 }" />
    </GMapMap>
  </div>
</template>