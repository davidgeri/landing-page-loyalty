<script setup lang="ts">
import { Share2, Award, CalendarCheck2 } from '@lucide/vue';
</script>

<template>
  <section class="py-16 bg-gray-50 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
      
      <div class="w-full md:w-1/3 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-3">
          Ekosistem
          <span class="border-2 border-dashed border-blue-500 text-blue-600 px-3 py-1 rounded-sm">Produk</span>
        </h2>
      </div>

      <div class="w-full md:w-2/3 flex justify-center mt-4 md:mt-0">       
        
        <div class="relative w-[90%] sm:w-[75%] md:w-full h-[280px] md:h-[450px] max-w-2xl mx-auto">
          
          <svg class="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
            <polygon points="250,70 110,320 390,320" fill="none" stroke="#252525" stroke-width="1.5" stroke-dasharray="6,6" />
          </svg>
          
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <img src="/images/Logo-cakra-minimal.png" alt="Ekosistem Cakrasoft" class="w-14 h-14 md:w-24 md:h-24 object-contain" />
            <span class="text-base md:text-2xl font-bold text-gray-800 mt-1 md:mt-2">Cakrasoft</span>
          </div>
          
          <div class="absolute top-0 md:top-4 left-1/2 -translate-x-1/2 z-20 bg-white border border-gray-300 shadow-sm rounded-md flex items-center md:items-start p-2 md:p-3 gap-2 md:gap-3 w-auto md:w-[240px]">
            <div class="shrink-0 text-gray-800 md:mt-1">
              <Share2 class="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 text-[11px] md:text-lg leading-tight whitespace-nowrap">Channel Manager</h4>
              <p class="hidden md:block text-sm text-gray-500 mt-1">Sinkronisasi Channel</p>
            </div>
          </div>
          
          <div class="absolute bottom-4 md:bottom-8 left-0 md:left-4 z-20 bg-white border border-gray-300 shadow-sm rounded-md flex items-center md:items-start p-2 md:p-3 gap-2 md:gap-3 w-auto md:w-[240px]">
            <div class="shrink-0 text-gray-800 md:mt-1">
              <CalendarCheck2 class="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 text-[11px] md:text-lg leading-tight whitespace-nowrap">Booking Engine</h4>
              <p class="hidden md:block text-sm text-gray-500 mt-1">Reservasi Langsung</p>
            </div>
          </div>
          
          <div class="absolute bottom-4 md:bottom-8 right-0 md:right-4 z-20 bg-white border border-gray-300 shadow-sm rounded-md flex items-center md:items-start p-2 md:p-3 gap-2 md:gap-3 w-auto md:w-[240px]">
            <div class="shrink-0 text-gray-800 md:mt-1">
              <Award class="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 text-[11px] md:text-lg leading-tight whitespace-nowrap">Cakra Loyalty</h4>
              <p class="hidden md:block text-sm text-gray-500 mt-1">Poin dan Reward Tamu</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>