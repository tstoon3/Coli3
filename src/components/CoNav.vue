<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
<template>


  <nav class="flex justify-between bg-gray-100 border-none h-18">
    <img alt="Colimited logo" class="logo" src="@/assets/Colimited.svg" width="175" height="100" />
    <div class="max-w-screen-xl text-xl font-bold max-w-screen-xl mx-auto content-center">
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div class="hidden md:block md:w-auto" id="navbar-default">
        <ul class="flex items-center h-15 text-lg text-base">
          <li class="px-6 hover:text-gray-600">
            <a href="#" aria-current="page">หน้าแรก</a>
          </li>
          <li class="px-6 hover:text-gray-600">
            <a target="_blank" href="https://online.fliphtml5.com/yuhij/gfdh/#p=1">เมนูอาหาร</a>
          </li>
          <li class="px-6 hover:text-gray-600">
            <a href="#">ข่าวสาร&โปรโมชั่น</a>
          </li>
          <li class="px-6 hover:text-gray-600 ">
            <a href="#">จองโต๊ะ</a>
          </li>
          <li class="px-6 hover:text-gray-600">
            <a href="#">ติดต่อเรา</a>
          </li>
          <li class="px-4 hover:text-gray-600 ">
            <a href="https://www.facebook.com/colimited.restaurant?locale=th_TH">
              <img src="@/Icons/facebook.svg" alt="">
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/colimited.restaurant/">
              <img src="@/Icons/instagram.svg" alt="" class="w-7 h-7">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
