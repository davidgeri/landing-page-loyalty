<script setup lang="ts">
import { GlobeCheck, Lightbulb, TrendingUp, Activity, ArrowLeftRight } from '@lucide/vue';
import OutlinePillPing from '../../components/outlinepill/OutlinePillPing.vue';
import FloatingTextCm from './FloatingTextCm.vue';

const OutlinePill = {
  bgPing: "bg-blue-500",
  classPill: "text-blue-500",
  text: "Channel Manager +"
}

const FloatingText = [
  {
    icon: Activity,
    heading: "Status",
    title: "Sinkronisasi real-time",
    positionClass: 'right-2 top-2 sm:right-4 sm:top-4 lg:right-6 lg:top-8'
  },
  {
    icon: ArrowLeftRight,
    heading: "Integrasi Luas",
    title: "Terhubung ke berbagai OTA",
    positionClass: 'left-2 bottom-2 sm:left-4 sm:bottom-4 lg:left-6 lg:bottom-6'
  },
]
</script>

<template>
  <section class="py-8 lg:py-16 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div class="lg:col-span-6 space-y-6">

          <OutlinePillPing :bg-ping="OutlinePill.bgPing" :class-pil="OutlinePill.classPill" :text="OutlinePill.text" />

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-800 tracking-tight leading-[1.15]">
            Kelola Berbagai Channel Penjualan Hotel Dari Satu Sistem
          </h1>

          <p class="text-lg text-slate-600 leading-relaxed max-w-xl">
            Cakrasoft Channel Manager membantu hotel memperbarui harga dan ketersediaan kamar pada berbagai channel
            secara lebih efisien.
          </p>

          <div class="pt-2 flex flex-wrap gap-2">
            <div
              class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm text-sm font-medium text-slate-700">
              <GlobeCheck class="w-5 h-5 text-blue-600" />
              User Friendly Interface
            </div>

            <div
              class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm text-sm font-medium text-slate-700">
              <Lightbulb class="w-5 h-5 text-blue-600" />
              Solutions for Hospitality
            </div>

            <div
              class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm text-sm font-medium text-slate-700">
              <TrendingUp class="w-5 h-5 text-blue-600" />
              Faster revenue, simpler process
            </div>
          </div>

        </div>

        <div class="lg:col-span-6 relative">

          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <img src="../../../public/assets/channel-manager-page.png" alt="Cakrasoft Channel Manager Dashboard"
              class="w-full max-w-xl h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          <div v-for="(floating, index) in FloatingText" :key="index">

            <FloatingTextCm
              :icon="floating.icon"
              :heading="floating.heading"
              :title="floating.title"
              :position-class="floating.positionClass"
            />

          </div>

        </div>

      </div>
    </div>
  </section>
</template>