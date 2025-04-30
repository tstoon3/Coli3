<script setup>
import { ref, onMounted, watch } from 'vue';
//import axios from 'axios';
//const provinces = ref([])

const branches = [{
  name: 'สาขา Siam Paragon',
  location: { lat: 13.7462842, lng: 100.5327381 },
  details: 'ชั้น G Floor Gourmet Garden Zone, Siam Paragon, 241 ถ. พระรามที่ 1 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330',
  phone: '021257517'
},
{
  name: 'สาขา Emsphere',
  location: { lat: 13.7323274, lng: 100.564128 },
  details: '628 ห้อง ชั้น GM05 ถ. สุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร 10110',
  phone: '0953725599'
},
{
  name: 'สาขา Central World',
  location: { lat: 13.747558562073433, lng: 100.53984501332049 },
  details: 'ชั้น 7 Floor Central World 999/9 ถ. พระรามที่ 1 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330',
  phone: '022528966'
},
{
  name: 'สาขา Langsuan',
  location: { lat: 13.737191203885132, lng: 100.54292951230548 },
  details: 'Velaa Sindhorn Village 87 Langsuan rd, ซอย, ถ. หลังสวน แขวงลุมพินี กรุงเทพมหานคร 10330',
  phone: ' 022552799'
}]


const selectedBranch = ref(branches[0])



const map = ref(null)
const marker = ref(null)

const initMap = () => {
  map.value = new window.google.maps.Map(document.getElementById('map'), { center: selectedBranch.value.location, zoom: 14 })

  marker.value = new window.google.maps.Marker({
    position: selectedBranch.value.location, map: map.value,
    title: selectedBranch.value.name,
  })
}
// ปักหมุด
const loadGoogleMaps = () => {
  if (!window.google) {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBnHYFLe-0JVKOSTX5_LYQg1UMFP-rlwhQ&callback=initMap`
    script.async = true
    document.head.appendChild(script)
    window.initMap = initMap
  } else {
    initMap()
  }
}

const updateMap = () => {
  if (map.value && marker.value) {
    map.value.setCenter(selectedBranch.value.location)
    marker.value.setPosition(selectedBranch.value.location)
    marker.value.setTitle(selectedBranch.value.name)
  }
}


onMounted(() => {
  loadGoogleMaps()
})

watch(() => selectedBranch.value, () => {
  updateMap()

  console.log(branches[0])
})
</script>
<template>
  <div class="flex flex-col items-center h-140">

    <!-- แถวบน: รูป 3 ใบ -->

    <div class="grid grid-cols-3 w-full">

      <img src="@/Img/WelcomeSPG.jpg" class="w-full h-70 object-cover blur-xs" />
      <img src="@/Img/WelcomeEMS.jpg" class="w-full h-70 object-cover blur-xs" />
      <img src="@/Img/WelcomeCTW.jpg" class="w-full h-70 object-cover blur-xs" />

    </div>
    <!-- แถวล่าง: 1 รูปกลาง -->
    <img src="@/Img/WelcomeRS.jpg" class="w-full h-70 object-cover mt-100 blur-xs" />
    <div class="absolute h-full w-full p-24">
      <div class="bg-white rounded-lg shadow-md overflow-hidden p-4 flex-col w-1/2 w-auto">
        <div class="flex flex-row p-2">
          <div class="max-w-sm mx-auto p-4 w-full">
            Location Branch :
            <label for="branch" class="block mb-2 text-sm font-medium text-gray-700">เลือกสาขา</label>
            <select id="branch" v-model="selectedBranch"
              class="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option v-for="(branch, index) in branches" :key="index" :value="branch">
                {{ branch.name }}
              </option>
            </select>

            <p class="mt-4 text-sm text-gray-600 pt-2">
              สาขาที่คุณเลือกคือ: <span class="font-semibold text-blue-600">{{ selectedBranch.name }}</span>
            </p>
            <div class="text-sm pt-6 h-auto">{{ selectedBranch.details }}</div>
            <a :href="`tel:${selectedBranch.phone}`" class="text-sm underline">เบอร์โทร: {{ selectedBranch.phone }}</a>
          </div>
          <div id="map" class="w-full h-[300px]"></div>
        </div>
      </div>
    </div>
  </div>


</template>