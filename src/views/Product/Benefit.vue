<script setup lang="ts">
import { ShieldCheck, TrendingUp, TabletSmartphone } from '@lucide/vue'

const benefits = [
  {
    title: 'Data Safety',
    desc: 'End to end data security, dengan high end server specification untuk akses mudah dan cepat ke sistem kami',
    icon: ShieldCheck 
  },
  {
    title: 'Maximum Performance', 
    desc: 'Menggunakan teknologi server tercepat dan paling andal diseluruh dunia untuk memaksimalkan kerja sistem',
    icon: TrendingUp
  },
  {
    title: 'Mobile Friendly',
    desc: 'Dirancang untuk digunakan di berbagai jenis device, mobile, tablet dan komputer dengan berbagai sitem operasi berbeda',
    icon: TabletSmartphone
  }
]
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    
    <div class="text-center mb-10">
      <span class="inline-flex items-center px-4 py-1 rounded-full border border-green-300 text-green-500 bg-white text-xs font-semibold mb-4">
        <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Benefits
      </span>
      
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kelebihan dari produk Kami</h2>
      <p class="text-gray-500 max-w-2xl mx-auto text-base">
        Kelebihan dan keuntungan yang bisa anda dapatkan jika menggunakan produk kami
      </p>
    </div>

    <div class="border border-gray-200 rounded-2xl p-8 md:p-12 bg-white shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <div v-for="(item, index) in benefits" :key="index" class="flex flex-col items-start">
          <div class="w-14 h-14 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-6 shadow-md">
            <component :is="item.icon" class="w-7 h-7" stroke-width="2" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>