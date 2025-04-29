<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';

const provinces = ref([])
const selectedBranch = ref('')
 onMounted(async () => {
  try{
    const reponse = await axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json')
    provinces.value = Object.values(reponse.data)
  } catch(err){
    console.error('ดึงข้อมูลไม่ได้',err)
  }
 })

const branches = ['Siam Paragon', 'Emsphere', 'Central World', 'Langsuan']

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
  <div class="flex flex-col items-center">
    
    <!-- แถวบน: รูป 3 ใบ -->
     
    <div class="grid grid-cols-3 w-full">
      
      <img src="@/Img/WelcomeSPG.jpg" class="w-full h-70 object-cover blur-xs" />
      <img src="@/Img/WelcomeEMS.jpg" class="w-full h-70 object-cover blur-xs" />
      <img src="@/Img/WelcomeCTW.jpg" class="w-full h-70 object-cover blur-xs" />
      
    </div>
    <!-- แถวล่าง: 1 รูปกลาง -->
    <img src="@/Img/WelcomeRS.jpg" class="w-full h-70 object-cover mt-100 blur-xs" />
    <div class="absolute h-full w-full p-24">
        <div class="bg-white rounded-lg shadow-md overflow-hidden w-265 p-4 w-1/2">
            Location branch
            <div class="w-full max-w-sm mx-auto p-4 ">
            <label for="branch" class="block mb-2 text-sm font-medium text-gray-700">เลือกสาขา</label>
            <select id="branch" v-model="selectedBranch" 
              class="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="" disabled selected>-- กรุณาเลือกสาขา --</option>
              <option v-for="(branch, index) in branches" :key="index" :value="branch">
                {{ branch }}
              </option>
            </select>

            <p class="mt-4 text-sm text-gray-600 pt-2">
              สาขาที่คุณเลือกคือ: <span class="font-semibold text-blue-600">{{ selectedBranch }}</span>
            </p>
          </div>

          <div id="map" class="w-125 h-[300px]"></div>

        </div>
      </div>
    
  </div>


</template>