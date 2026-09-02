<script setup lang="ts">
import { GlobeCheck, Lightbulb, TrendingUp, Activity, ArrowLeftRight } from '@lucide/vue';
</script>

<template>
  <section class="py-8 lg:py-16 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          
          <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            Channel Manager +
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 tracking-tight leading-[1.15]">
            Kelola Berbagai Channel Penjualan Hotel Dari Satu Sistem
          </h1>

          <p class="text-lg text-slate-600 leading-relaxed max-w-xl">
            Cakrasoft Channel Manager membantu hotel memperbarui harga dan ketersediaan kamar pada berbagai channel secara lebih efisien.
          </p>

          <div class="pt-2 flex flex-wrap gap-2">
            <div class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm text-sm font-medium text-slate-700">
              <GlobeCheck class="w-5 h-5 text-blue-600" />
              User Friendly Interface
            </div>

            <div class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm text-sm font-medium text-slate-700">
              <Lightbulb class="w-5 h-5 text-blue-600" />
              Solutions for Hospitality
            </div>

            <div class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm text-sm font-medium text-slate-700">
              <TrendingUp class="w-5 h-5 text-blue-600" />
              Faster revenue, simpler process
            </div>
          </div>

        </div>

        <div class="lg:col-span-6 relative">
          
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <img 
              src="../../../public/assets/channel-manager-page.png" 
              alt="Cakrasoft Channel Manager Dashboard" 
              class="w-full max-w-xl h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <div class="absolute -top-5 right-6 sm:right-10 z-20 bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-lg px-4 py-3 rounded-2xl flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Activity class="w-5 h-5" />
            </div>
            <div>
              <p class="text-[11px] text-slate-400 font-medium">Status</p>
              <p class="text-xs sm:text-sm font-bold text-slate-800">Sinkronisasi real-time</p>
            </div>
          </div>

          <div class="absolute -bottom-5 left-6 sm:left-10 z-20 bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-lg px-4 py-3 rounded-2xl flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <ArrowLeftRight class="w-5 h-5" />
            </div>
            <div>
              <p class="text-[11px] text-slate-400 font-medium">Integrasi Luas</p>
              <p class="text-xs sm:text-sm font-bold text-slate-800">Terhubung ke berbagai OTA</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>