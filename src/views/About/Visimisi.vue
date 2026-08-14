<script setup lang="ts">
import { ChartColumnBig, Settings, LaptopMinimal } from 'lucide-vue-next';
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900">Visi dan Misi</h1>
    </div>
    <div class="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="pt-4">
        <h2 class="text-2xl font-bold text-blue-600 mb-4">Visi</h2>
        <p class="text-gray-700 text-xl leading-relaxed font-medium">
          Menjadi Perusahaan teknologi informasi yang berstandar internasional
        </p>
      </div>
      <div>
        <h2 class="text-xl font-bold text-blue-600 mb-4">Misi</h2>
        <div class="space-y-4">
          <div class="border border-gray-200 p-4 rounded-md flex gap-4 items-start bg-white shadow-sm">
            <span class="text-blue-500 mt-1"><Settings /></span>
            <p class="text-lg text-gray-700">Menyediakan solusi bagi corporation dengan membuat produk yang kreatif dan berkualitas</p>
          </div>
          <div class="border border-gray-200 p-4 rounded-md flex gap-4 items-start bg-white shadow-sm">
            <span class="text-blue-500 mt-1"><LaptopMinimal /></span>
            <p class="text-lg text-gray-700">Menyediakan layanan prima untuk customer dan mitra usaha</p>
          </div>
          <div class="border border-gray-200 p-4 rounded-md flex gap-4 items-start bg-white shadow-sm">
            <span class="text-blue-500 mt-1"><ChartColumnBig /></span>
            <p class="text-lg text-gray-700">Menjadi mitra terpercaya dan handal bagi customer dan stakeholder</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>