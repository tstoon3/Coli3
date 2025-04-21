<script setup>
import { ref } from 'vue'

const cardContainer = ref(null)

const scrollLeft = () => {
    cardContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
}
const scrollRight = () => {
    cardContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
}
</script>
<template>
    <div class="flex flex-col justify-center bg-blue-900 p-3 text-gray-200 text-lx">
        <div class="p-3">
            <div class="flex flex-col p-1">
                <span class="text-yellow-300"> New & Promotion</span>
                <span class="underline">ข่าวสาร & โปรโมชั่น</span>
            </div>
            <!--กล่อง Cards-->
            <div ref="cardContainer" class="ps-6 py-4 flex flex-row justify-evenly items-center overflow-x-auto scroll-smooth">
                <button @click="scrollLeft()"
                    class="absolute left-4 -translate-y-1/2 z-10 shadow p-2 rounded-full hover:bg-gray-200">
                    <img src="@/Icons/arrow_R.svg" alt="→" class="w-6 h-6 rotate-180" />
                </button>

                <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden ps-4 pe-4">
                    <!-- รูปภาพ -->
                    <img src="https://source.unsplash.com/random/400x200" alt="ภาพ" class="w-full h-48 object-cover">

                    <!-- เนื้อหาด้านล่าง -->
                    <div class="p-4">
                        <!-- ข้อความ -->
                        <h3 class="text-lg font-semibold text-left">Card with Image</h3>
                        <p class="text-gray-600 mt-2 text-left text-base">รายละเอียดเนื้อหาแบบย่ออยู่ที่นี่</p>

                        <!-- ปุ่มอยู่ขวา -->
                        <div class="mt-4 flex justify-end">
                            <button class="bg-yellow-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-base">
                                อ่านเพิ่มเติม
                            </button>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden ps-4 pe-4">
                    <!-- รูปภาพ -->
                    <img src="https://source.unsplash.com/random/400x200" alt="ภาพ" class="w-full h-48 object-cover">

                    <!-- เนื้อหาด้านล่าง -->
                    <div class="p-4">
                        <!-- ข้อความ -->
                        <h3 class="text-lg font-semibold text-left">Card with Image</h3>
                        <p class="text-gray-600 mt-2 text-left text-base">รายละเอียดเนื้อหาแบบย่ออยู่ที่นี่</p>

                        <!-- ปุ่มอยู่ขวา -->
                        <div class="mt-4 flex justify-end">
                            <button class="bg-yellow-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-base">
                                อ่านเพิ่มเติม
                            </button>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden ps-4 pe-4 flex-shrink">
                    <!-- รูปภาพ -->
                    <img src="https://source.unsplash.com/random/400x200" alt="ภาพ" class="w-full h-48 object-cover">

                    <!-- เนื้อหาด้านล่าง -->
                    <div class="p-4">
                        <!-- ข้อความ -->
                        <h3 class="text-lg font-semibold text-left">Card with Image</h3>
                        <p class="text-gray-600 mt-2 text-left text-base">รายละเอียดเนื้อหาแบบย่ออยู่ที่นี่</p>

                        <!-- ปุ่มอยู่ขวา -->
                        <div class="mt-4 flex justify-end">
                            <button class="bg-yellow-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-base">
                                อ่านเพิ่มเติม
                            </button>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden ps-4 pe-4">
                    <!-- รูปภาพ -->
                    <img src="https://source.unsplash.com/random/400x200" alt="ภาพ" class="w-full h-48 object-cover">

                    <!-- เนื้อหาด้านล่าง -->
                    <div class="p-4">
                        <!-- ข้อความ -->
                        <h3 class="text-lg font-semibold text-left">Card with Image</h3>
                        <p class="text-gray-600 mt-2 text-left text-base">รายละเอียดเนื้อหาแบบย่ออยู่ที่นี่</p>

                        <!-- ปุ่มอยู่ขวา -->
                        <div class="mt-4 flex justify-end">
                            <button class="bg-yellow-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-base">
                                อ่านเพิ่มเติม
                            </button>
                        </div>
                    </div>
                </div>
                
                <button @click="scrollRight()"
                    class="absolute right-4 -translate-y-1/2 z-10 shadow p-2 rounded-full hover:bg-gray-200">
                    <img src="@/Icons/arrow_R.svg" alt="→" class="w-6 h-6" />
                </button>
            </div>
        </div>
    </div>
</template>