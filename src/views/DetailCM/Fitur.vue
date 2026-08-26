<script setup lang="ts">
import { CheckCircle2 } from '@lucide/vue';

const features = [
  "Sinkronisasi inventory.",
  "Pengelolaan harga kamar.",
  "Pengelolaan room allotment.",
  "Pembaruan data otomatis.",
  "Dashboard channel.",
  "Pemantauan status koneksi.",
  "Penerimaan reservasi dari OTA.",
  "Integrasi dengan Cakrasoft Cloud Hotel.",
  "Pengelolaan beberapa channel.",
  "Riwayat proses sinkronisasi."
];
</script>

<template>
  <section class="py-20 bg-slate-50/50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <div class="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          
          <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-200/60 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            Main Feature
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Fitur Utama Sistem Channel Manager Cakrasoft
          </h2>

          <p class="text-lg text-slate-600 leading-relaxed">
            Distribusi kamar lebih cepat, sinkron lebih akurat, tanpa kerumitan manual.
          </p>

        </div>

        <div class="lg:col-span-7">
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-200 border-b border-slate-100 last:border-none"
            >
              <div class="flex-shrink-0 text-emerald-500">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              
              <span class="text-lg sm:text-xl font-medium text-slate-800">
                {{ feature }}
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>