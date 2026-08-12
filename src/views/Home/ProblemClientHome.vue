<script setup lang="ts">
import { Percent, Pointer, CalendarX2, HeartOff } from "lucide-vue-next"
</script>

<template>
    <div class="flex justify-center flex-col gap-5 md:flex-row mt-16">
        <div class="flex flex-col gap-2 md:w-150 md:mt-32 ">
            <p class="border px-5 border-red-500 text-red-600 rounded-xl font-semibold w-42">Client Problem</p>
            <h1 class="text-4xl font-semibold">Tantangan yang Sering Dihadapi Hotel</h1>
            <p class="text-md md:w-150">Karena sistem yang Anda gunakan sekarang masih berjalan sendiri-sendiri dan tidak
                saling terhubung, mengelola hotel jadi jauh lebih sulit dari seharusnya.</p>
        </div>
        <div class="flex flex-col">
            <div class="w-full max-w-sm bg-white border-2 border-gray-900 rounded-xl p-6 hover:scale-105 hover:z-40 duration-300 hover:cursor-pointer hover:border-red-500 hover:shadow-xl hover:shadow-red-200 group">
                <Pointer class="rotate-180 -mt-20 absolute hidden group-hover:block duration-300 animate-bounce" />
                <!-- Icon box -->
                <div class="w-8 h-8 flex items-center justify-center border-2 border-gray-900 rounded-sm">
                    <Percent :size="15" :stroke-width="2.5" class="text-gray-900" />
                </div>

                <!-- Title -->
                <h3 class="text-2xl font-extrabold leading-snug text-[#FF5A5F] mb-3">
                    Ketergantungan pada OTA
                </h3>

                <!-- Description -->
                <p class="text-base leading-relaxed text-gray-900">
                    Biaya komisi tinggi menggerus margin, sementara reservasi langsung tetap rendah.
                </p>
            </div>

            <div class="w-full -mt-5 max-w-sm bg-white border-2 border-gray-900 rounded-xl p-6 rotate-3 hover:scale-105 hover:z-40 duration-300 hover:cursor-pointer hover:border-red-500 hover:shadow-xl hover:shadow-red-200 group">
                <!-- Icon box -->
                  <Pointer fill="#ffff" class="rotate-180 -mt-20 absolute hidden group-hover:block duration-300 animate-bounce" />
                <div class="w-8 h-8 flex items-center justify-center border-2 border-gray-900 rounded-sm">
                    <CalendarX2 :size="15" :stroke-width="2.5" class="text-gray-900" />
                </div>

                <!-- Title -->
                <h3 class="text-2xl font-extrabold leading-snug text-[#FF5A5F] mb-3">
                    Ketergantungan pada OTA
                </h3>

                <!-- Description -->
                <p class="text-base leading-relaxed text-gray-900">
                    Biaya komisi tinggi menggerus margin, sementara reservasi langsung tetap rendah.
                </p>
            </div>

            <div class="w-full z-30 -mt-4 max-w-sm bg-white border-2 border-gray-900 rounded-xl p-6 hover:scale-105 hover:z-40 duration-300 hover:cursor-pointer hover:border-red-500 hover:shadow-xl hover:shadow-red-200 group">
              <Pointer fill="#f1f1f1" class="rotate-180 -mt-20 absolute hidden group-hover:block duration-300 z-40 animate-bounce" />
                <!-- Icon box -->
                <div class="w-8 h-8 flex items-center justify-center border-2 border-gray-900 rounded-sm">
                    <HeartOff :size="15" :stroke-width="2.5" class="text-gray-900" />
                </div>

                <!-- Title -->
                <h3 class="text-2xl font-extrabold leading-snug text-[#FF5A5F] mb-3">
                    Ketergantungan pada OTA
                </h3>

                <!-- Description -->
                <p class="text-base leading-relaxed text-gray-900">
                    Biaya komisi tinggi menggerus margin, sementara reservasi langsung tetap rendah.
                </p>
            </div>
        </div>
    </div>
</template>