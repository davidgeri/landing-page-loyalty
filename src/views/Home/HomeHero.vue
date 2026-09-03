<script setup lang="ts">

import { Cloud, Award  } from "@lucide/vue"
import { RouterLink } from "vue-router"
import Badge from './Badge.vue';

const Tooltip = '<div class="flex gap-1 text-sm">Mulai Coba <span class="-mr-1 inline-flex items-center justify-center leading-none px-1.5 rounded-sm bg-blue-600 text-blue-50 text-xs font-medium font-mono">TRY NOW</span></div>';

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
    <div class="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-8">
        <div class="flex min-w-0 flex-col gap-3 md:max-w-xl">
            <p
                class="flex w-fit max-w-full items-center gap-2 rounded-xl border border-stone-400 px-3 py-1 text-[10px] font-bold text-stone-400 sm:px-5">
                <span class="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500"></span>
                    <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <Cloud class="h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
                <span class="truncate">{{ dataHero.title }}</span>
            </p>
            <h1 id="hero-title" class="text-3xl font-semibold leading-tight text-stone-600 sm:text-4xl md:text-5xl">Solusi Add-ons <span
                    class="inline-block border-2 border-dashed px-2 sm:px-5">Untuk</span> <span class="text-blue-500">Mempercepat</span>
                pertumbuhan Hotel</h1>
            <p class="text-sm leading-relaxed text-stone-500 sm:text-base md:text-xl">{{ dataHero.desk }}</p>
            <div class="flex flex-col">
                <nav aria-label="Aksi utama hero"
                    class="flex flex-col items-center gap-3 text-center sm:flex-row md:gap-5">
                    <RouterLink :to="dataHero.left_button.navto"
                        class="w-full rounded-xl bg-blue-500 p-2 text-lg font-semibold text-white duration-300 hover:bg-blue-400 sm:w-auto sm:flex-1"
                        v-tooltip.top="{ value: Tooltip, escape: false }">{{ dataHero.left_button.name }} 
                    </RouterLink>

                    <RouterLink class="w-full rounded-xl border border-blue-500 p-2 text-lg font-semibold text-blue-500 sm:w-auto sm:flex-1"
                        :to="dataHero.right_button.navto">
                        {{ dataHero.right_button.name }}</RouterLink>
                </nav>
            </div>
            <Badge />
        </div>
        <figure class="group relative mx-auto mt-4 w-full max-w-md md:mt-0 md:max-w-xl">
            <span class="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 text-center text-xl font-semibold text-blue-500 group-hover:block sm:text-2xl">Explore
                Product →</span>
            <div class="group-hover:blur-md duration-300">
                <div class="absolute left-0 top-[8%] z-10 flex items-center gap-2 rounded-md border bg-white/80 px-2 py-1 backdrop-blur-sm sm:gap-3 sm:px-4">
                    <img src="/images/logo-booking-engine-2.png" class="w-5 h-5" alt="">
                    <p class="hidden md:block">Booking Engine</p>
                </div>

                <div class="absolute right-0 top-[24%] z-10 flex items-center gap-2 rounded-md border bg-white/80 px-2 py-1 backdrop-blur-2xl sm:gap-3 sm:px-4">
                    <img src="/images/logo-channel-manager.png" class="w-5 h-5" alt="">
                    <p class="hidden md:block">Channel Manager</p>
                </div>

                <div class="absolute bottom-[10%] left-[8%] z-10 flex items-center gap-2 rounded-md border bg-white px-2 py-1 sm:gap-3 sm:px-4">
                    <Award class="w-5 h-5 text-blue-800" />
                    <p class="hidden md:block">Cakra Loyalty</p>
                </div>
                
                <RouterLink to="/product">
                    <img class="h-auto w-full object-contain" :src="dataHero.images" :alt="dataHero.alt_img">
                </RouterLink>
            </div>
        </figure>
    </div>
</template>