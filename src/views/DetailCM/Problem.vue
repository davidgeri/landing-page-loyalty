<script setup lang="ts">
import { Clock, AlertTriangle, CalendarX, Edit3, Hourglass, EyeOff } from '@lucide/vue';

const problems = [
  {
    icon: Clock,
    title: "Update Manual",
    desc: "Update harga dilakukan satu per satu tiap channel"
  },
  {
    icon: AlertTriangle,
    title: "Inventory Tidak Sinkron",
    desc: "Inventory berbeda antar channel"
  },
  {
    icon: CalendarX,
    title: "Risiko Overbooking",
    desc: "Kamar terjual ganda di channel berbeda"
  },
  {
    icon: Edit3,
    title: "Kesalahan Input Harga",
    desc: "Human error saat input manual berulang"
  },
  {
    icon: Hourglass,
    title: "Buang Banyak Waktu",
    desc: "Proses kelola OTA memakan waktu operasional"
  },
  {
    icon: EyeOff,
    title: "Sulit Dipantau",
    desc: "Tim kesulitan memantau seluruh koneksi"
  }
];
</script>

<template>
  <section class="py-20 bg-slate-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 bg-red-50 text-red-600 border border-red-200/60 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Client Problem
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
          Mengelola Banyak Channel Tanpa Sistem yang Tepat Itu Rumit.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in problems" 
          :key="index"
          class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="item.icon" class="w-8 h-8" />
            </div>

            <h3 class="text-2xl font-bold text-slate-900 mb-3">
              {{ item.title }}
            </h3>

            <p class="text-slate-600 text-lg leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>