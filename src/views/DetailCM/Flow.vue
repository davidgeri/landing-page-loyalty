<script setup lang="ts">
import { ArrowDown } from '@lucide/vue';

const steps = [
  {
    title: "Hotel mengatur harga dan inventory",
    solid: true
  },
  {
    title: "Data dikirim ke channel penjualan",
    solid: false
  },
  {
    title: "Tamu melakukan pemesanan melalui salah satu channel",
    solid: true
  },
  {
    title: "Reservasi diterima oleh sistem hotel",
    solid: true
  },
  {
    title: "Inventory diperbarui",
    solid: false
  },
  {
    title: "Perubahan dikirim ke channel lainnya",
    solid: false
  }
];
</script>

<template>
  <section class="py-20 bg-white overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-200/60 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
          <span class="w-2 h-2 rounded-full bg-blue-600"></span>
          Work Flow
        </div>

        <h2 class="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-[1.15]">
          Alur Kerja Sistem <br /> Chanel Manager Cakrasoft
        </h2>
      </div>

      <div class="flex flex-col items-center max-w-xl mx-auto">
        <template v-for="(step, index) in steps" :key="index">
          
          <div 
            :class="[
              'w-full py-5 px-6 rounded-2xl text-center shadow-sm transition-all duration-300 flex items-center justify-center min-h-[80px]',
              step.solid 
                ? 'bg-blue-600 text-white font-semibold text-lg sm:text-lg shadow-blue-600/20 shadow-md' 
                : 'bg-white text-slate-800 font-medium text-lg sm:text-lg border-2 border-dashed border-slate-300'
            ]"
          >
            {{ step.title }}
          </div>

          <div v-if="index < steps.length - 1" class="my-3 text-blue-600 flex items-center justify-center">
            <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
              <ArrowDown class="w-6 h-6" />
            </div>
          </div>

        </template>
      </div>

    </div>
  </section>
</template>