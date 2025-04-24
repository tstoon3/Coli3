<script setup>
import { ref } from 'vue';
import axios from 'axios';

const address = ref('');
const coordinates = ref(null);

const getCoordinates = async () =>{
  try{
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:address.value,
        key:'AIzaSyBnHYFLe-0JVKOSTX5_LYQg1UMFP-rlwhQ',
      }
    })
    const location = response.data.result[0]?.geometry.location
    coordinates.value = location
  } catch(error){
    console.error('ERROR',error)
  }
}

const branches = ['Siam Paragon', 'Emsphere', 'Central World', 'Langsuan']

// ค่าที่ถูกเลือก
const selectedBranch = ref('')

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
        <div class="bg-white rounded-lg shadow-md overflow-hidden w-75 p-4">
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
        </div>
      </div>
      <div class="p-4 max-w-lg mx-auto space-y-4">
    <input
      type="text"
      v-model="address"
      placeholder="ป้อนที่อยู่ เช่น เซ็นทรัลเวิลด์ กรุงเทพ"
      class="border px-4 py-2 rounded w-full"
    />
    <button
      @click="getCoordinates"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      แปลงเป็นพิกัด
    </button>

    <div v-if="coordinates" class="mt-4 text-sm text-gray-800">
      📍 พิกัดที่ได้:  
      <div>Lat: {{ coordinates.lat }}</div>
      <div>Lng: {{ coordinates.lng }}</div>
    </div>
  </div>
    
  </div>


</template>