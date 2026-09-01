<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ArrowRight } from "@lucide/vue"

const Tooltip = '<div class="flex gap-1 text-sm">Mulai Coba <span class="-mr-1 inline-flex items-center justify-center leading-none px-1.5 rounded-sm bg-blue-600 text-blue-50 text-xs font-medium font-mono">TRY NOW</span></div>';

const data = {
    desk: "Cakrasoft Booking Engine menyediakan proses pemesanan kamar yang mudah, cepat,  dan terintegrasi dengan sistem hotel.",
    button: [
        {
            idx: 1,
            name: "Request Demo",
            to: "/request-demo"
        },
        {
            idx: 2,
            name: "Lihat Fitur",
            to: "#fitur"
        },
    ]
}
</script>

<template>
    <section class="md:w-xl" aria-labelledby="booking-engine-title">
        <header class="flex flex-col gap-8 justify-center">
            <div class="text-3xl font-semibold flex flex-col gap-5">
                <h1 id="booking-engine-title" class="text-4xl md:text-5xl text-stone-700 font-bold">
                    Tingkat Reservasi Langsung melalui <span class="text-blue-500">Website</span> Hotel
                </h1>
                <p class="font-medium text-lg md:w-lg w-auto">{{ data.desk }}</p>
            </div>

            <nav aria-label="Aksi utama hero">
                <ul class="flex flex-col items-center gap-3 text-center sm:flex-row md:gap-5 list-none m-0 p-0">
                    <li class="w-full sm:w-auto sm:flex-1">
                        <RouterLink
                            :to="data.button[0].to"
                            class="w-full rounded-xl bg-blue-500 p-2 text-lg font-semibold text-white duration-300 hover:bg-blue-400 sm:w-auto sm:flex-1 flex gap-2 justify-center items-center group"
                            v-tooltip.top="{ value: Tooltip, escape: false }"
                        >
                            <span>{{ data.button[0].name }}</span>
                            <ArrowRight class="w-6 h-6 group-hover:translate-x-1 duration-150" />
                        </RouterLink>
                    </li>

                    <li class="w-full sm:w-auto sm:flex-1">
                        <RouterLink
                            class="w-full rounded-xl border border-blue-500 p-2 text-lg font-semibold text-blue-500 sm:w-auto sm:flex-1 hover:border-blue-300 duration-150 block"
                            :to="data.button[1].to"
                        >
                            {{ data.button[1].name }}
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
    </section>
</template>