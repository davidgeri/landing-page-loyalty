<script setup lang="ts">
import { LineChart, CalendarCheck, Globe, Clock } from '@lucide/vue';

const solutions = [
  { icon: LineChart, position: "-top-6 left-1/2 -translate-x-1/2" },
  { icon: CalendarCheck, position: "top-1/2 -right-6 -translate-y-1/2" },
  { icon: Globe, position: "-bottom-6 left-1/2 -translate-x-1/2" },
  { icon: Clock, position: "top-1/2 -left-6 -translate-y-1/2" },
];
</script>

<template>
  <section class="py-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-200/60 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            Our Solution
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Satu Sistem, Terhubung ke Semua Channel
          </h2>
          <p class="text-lg text-slate-600 leading-relaxed max-w-xl">
            Channel Manager menghubungkan data harga, inventory, dan reservasi antara Cakrasoft dengan berbagai channel penjualan hotel.
          </p>
        </div>

        <div class="lg:col-span-6 flex items-center justify-center py-10">
          <div class="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            
            <div class="absolute inset-0 rounded-full border-2 border-slate-700 border-dashed sm:border-solid"></div>
            <img src="../../../public/images/Logo-cakra-minimal.png" alt="Cakrasoft" class="w-30 h-30 sm:w-36 sm:h-36 object-contain z-10" />

            <div 
              v-for="(item, index) in solutions" 
              :key="index"
              :class="['absolute z-20 w-20 h-16 bg-white rounded-2xl shadow-lg border border-slate-900 flex items-center justify-center text-blue-600', item.position]"
            >
              <component :is="item.icon" class="w-8 h-8" />
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>