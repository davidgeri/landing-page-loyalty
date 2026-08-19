<script setup lang="ts">

import { Cloud, Award  } from "lucide-vue-next"
import { RouterLink } from "vue-router"
import Badge from './Badge.vue';

const flight1 = '<div class="flex gap-1 text-sm">Mulai Coba <span class="-mr-1 inline-flex items-center justify-center leading-none px-1.5 rounded-sm bg-blue-600 text-blue-50 text-xs font-medium font-mono">TRY NOW</span></div>';

    interface Left_button {
        name: string
        navto: string
    }

   interface Right_button {
        name: string
        navto: string
    }

    interface DataHero {
        images: string
        alt_img: string
        desk: string
        title: string
        left_button: Left_button
        right_button: Right_button
    }
    
    interface Props {
        dataHero: DataHero
        toolTip: string
    }

    const props = defineProps<Props>()

</script>

<template>
    <div class="flex flex-col md:flex-row md:justify-between">
        <div class="flex flex-col gap-3">
            <p
                class="text-[10px] text-stone-400 font-bold border border-stone-400 rounded-xl px-5 p-0.5 md:w-70 flex gap-3 items-center">
                <span class="absolute animate-ping w-2 h-2 bg-green-500 rounded-full -mt-6" aria-hidden="true"></span>
                <span class="absolute w-2 h-2 bg-green-500 rounded-full -mt-6" aria-hidden="true"></span>
                <Cloud class="text-blue-500" aria-hidden="true" />
                <span>{{ dataHero.title }}</span>
            </p>
            <h1 id="hero-title" class="text-3xl font-semibold text-stone-600 md:text-5xl md:w-xl ">Solusi Add-ons <span
                    class="border-2 border-dashed px-5">Untuk</span> <span class="text-blue-500">Mempercepat</span>
                pertumbuhan Hotel</h1>
            <p class="text-stone-500 text-sm md:text-xl md:w-xl ">{{ dataHero.desk }}</p>
            <div class="flex flex-col">
                <nav aria-label="Aksi utama hero"
                    class="flex text-center items-center flex-col md:flex-row gap-5 md:gap-10">
                    <RouterLink :to="dataHero.left_button.navto"
                        class="bg-blue-500 text-white p-2 text-lg font-semibold rounded-xl w-full hover:bg-blue-400 duration-300"
                        v-tooltip.top="{ value: flight1, escape: false }">{{ dataHero.left_button.name }} 
                    </RouterLink>

                    <RouterLink class="border border-blue-500 rounded-xl p-2 w-full font-semibold text-lg text-blue-500"
                        :to="dataHero.right_button.navto">
                        {{ dataHero.right_button.name }}</RouterLink>
                </nav>
            </div>
            <Badge />
        </div>
        <figure class="group mt-20 md:mt-0">
            <span class="text-2xl absolute hidden font-semibold group-hover:block ml-42 text-blue-500">Explore
                Product →</span>
            <div class="group-hover:blur-md duration-300">
                <div class="absolute flex items-center px-4 backdrop-blur-sm gap-3 rounded-md border p-1">
                    <img src="/images/logo-booking-engine-2.png" class="w-5 h-5" alt="">
                    <p class="hidden md:block">Booking Engine</p>
                </div>

                <div class="absolute flex items-center px-4 backdrop-blur-2xl ml-50 gap-3 rounded-md border p-1 md:ml-72">
                    <img src="/images/logo-channel-manager.png" class="w-5 h-5" alt="">
                    <p class="hidden md:block">Channel Manager</p>
                </div>

                <div class="absolute flex items-center px-4 bg-white gap-3 rounded-md  p-1 ml-10 mt-50  border md:mt-82">
                    <Award class="w-5 h-5 text-blue-800" />
                    <p class="hidden md:block">Cakra Loyalty</p>
                </div>
                
                <RouterLink to="/">
                    <img class="w-xl h-xl" :src="dataHero.images" :alt="dataHero.alt_img">
                </RouterLink>
            </div>
        </figure>
    </div>
</template>