<script setup>
import { ref } from 'vue'

const cardContainer = ref(null)

const scrollLeft = () => {
    cardContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
}
const scrollRight = () => {
    cardContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
}
const promotions = ref([{
    id: 1,
    title: 'ลด 10% ทุกเมนูเนื้อ',
    description: 'เฉพาะวันจันทร์ถึงศุกร์ ',
    image: 'https://source.unsplash.com/400x200/?beef',
},
{
    id: 2,
    title: 'ฟรีขนมหวานเมื่อสั่งครบ 500 บาท',
    description: 'เฉพาะลูกค้าที่สั่งผ่านหน้าเว็บ',
    image: 'https://source.unsplash.com/400x200/?dessert',
},
{
    id: 3,
    title: 'เมนูใหม่! เนื้อโคขุนย่างถ่าน',
    description: 'ลองเลยวันนี้กับรสชาติสุดพรีเมียม',
    image: 'https://source.unsplash.com/400x200/?bbq',
},
{
    id: 4,
    title: 'เมนูใหม่! เนื้อโคขุนย่างถ่าน',
    description: 'ลองเลยวันนี้กับรสชาติสุดพรีเมียม',
    image: 'https://source.unsplash.com/400x200/?bbq',
},
{
    id: 5,
    title: 'เมนูใหม่! เนื้อโคขุนย่างถ่าน',
    description: 'ลองเลยวันนี้กับรสชาติสุดพรีเมียม',
    image: 'https://source.unsplash.com/400x200/?bbq',
},
{
    id: 6,
    title: 'เมนูใหม่! เนื้อโคขุนย่างถ่าน',
    description: 'ลองเลยวันนี้กับรสชาติสุดพรีเมียม',
    image: 'https://source.unsplash.com/400x200/?bbq',
},
])
</script>

<template>
    <div class="relative flex flex-col justify-center bg-blue-900 p-3 text-gray-200 text-lx">

        <!-- หัวข้อ -->
        <div class="p-3">
            <div class="flex flex-col p-1">
                <span class="text-yellow-300"> New & Promotion</span>
                <span class="text-4xl">ข่าวสาร & โปรโมชั่น</span>
            </div>
        </div>

        <!-- ปุ่มเลื่อนซ้าย -->
        <button @click="scrollLeft"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200">
            <img src="@/Icons/arrow_R.svg" alt="←" class="w-6 h-6 rotate-180" />
        </button>
        <!-- กล่อง Scroll Cards -->
        <div ref="cardContainer" class="px-8 py-4 flex overflow-x-auto scroll-smooth" style="scrollbar-width: none;">
            <!-- วนลูปโปรโมชั่น -->
            <div v-for="(promo, index) in promotions" :key="promo.id" :class="[
                'min-w-[270px] flex-shrink-0',
                index !== promotions.length - 1 ? 'mr-4' : ''
            ]">
                <div class="p-6 ">
                    <!-- card -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden w-75">
                        <img :src="`https://source.unsplash.com/random/400x200?sig=${promo.image}`" alt="ภาพ"
                            class="h-50" />

                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-left text-red-400">
                                {{ promo.title }}
                            </h3>
                            <p class="text-gray-600 mt-2 text-left text-base">
                                {{ promo.description }}
                            </p>

                            <div class="mt-4 flex justify-end p-2">
                                <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-base">
                                    อ่านเพิ่มเติม
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ปุ่มเลื่อนขวา -->
        <button @click="scrollRight"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200">
            <img src="@/Icons/arrow_R.svg" alt="→" class="w-6 h-6" />
        </button>
    </div>
</template>
