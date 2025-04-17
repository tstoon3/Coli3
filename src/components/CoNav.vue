<script setup>

</script>
<template>


<nav class="flex justify-between bg-gray-100 border-none h-15">
  <img alt="Colimited logo" class="logo" src="@/assets/Colimited.svg" width="175" height="175" />
  <div class="max-w-screen-xl text-xl font-bold">
    <div class="container flex items-center transform -translate-x-1/2">
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    </div>
    
    <div class="hidden md:block md:w-auto" id="navbar-default">
      <ul class="flex items-center h-15 text-lg text-base">
        <li class="px-6 hover:text-gray-600">
          <a href="#" aria-current="page">หน้าแรก</a>
        </li>
        <li class="px-6 hover:text-gray-600">
          <a target="_blank" href="https://online.fliphtml5.com/yuhij/gfdh/#p=1" >เมนูอาหาร</a>
        </li>
        <li class="px-6 hover:text-gray-600">
          <a href="#" >ข่าวสาร&โปรโมชั่น</a>
        </li>
        <li class="px-6 hover:text-gray-600 ">
          <a href="#" >จองโต๊ะ</a>
        </li>
        <li class="px-6 hover:text-gray-600">
          <a href="#" >ติดต่อเรา</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>
