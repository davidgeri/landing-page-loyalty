<script setup lang="ts">
import { Network, TrendingUp, MapPinned } from '@lucide/vue';
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7">
        <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100">Solusi Cloud Terbaik</span>
        <h1 class="text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
          Solusi Teknologi untuk<br />
          Mendukung Operasional <span class="text-blue-600 border-b-2 border-dashed border-blue-600">Hotel</span>
        </h1>
      </div>  
      <div class="lg:col-span-4 lg:col-start-9">
        <p class="text-gray-600 leading-relaxed text-lg max-w-full">
          Cakrasoft membantu hotel mengelola operasional secara lebih terstruktur melalui sistem berbasis cloud dan produk add-ons yang saling terintegrasi.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-100">
      <div>
        <h3 class="font-bold text-taupe-600 flex items-center gap-2 mb-2">
          <span class="text-blue-600"><Network /></span> Integrasi mudah antar produk
        </h3>
        <p class="text-sm text-gray-500">Semua add-ons terhubung jadi satu ekosistem, bukan sistem terpisah-pisah.</p>
      </div>
      <div>
        <h3 class="font-bold text-taupe-600 flex items-center gap-2 mb-2">
          <span class="text-blue-600"><TrendingUp /></span> Scalabel
        </h3>
        <p class="text-sm text-gray-500">Tumbuh sesuai bisnis, dari hotel independen sampai chain besar.</p>
      </div>
      <div>
        <h3 class="font-bold text-taupe-600 flex items-center gap-2 mb-2">
          <span class="text-blue-600"><MapPinned /></span> Support lokal
        </h3>
        <p class="text-sm text-gray-500">Tim support yang paham konteks hotel Indonesia, responsif dan dekat.</p>
      </div>
    </div>
  </section>
</template>